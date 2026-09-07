import { test, expect } from "@playwright/test";
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() =>
    localStorage.setItem("keyvostra-welcome-seen", "1"),
  );
});
import fs from "node:fs";
const messages = JSON.parse(fs.readFileSync("src/i18n/messages.json", "utf8"));
const projects = [
  "investissement-residentiel-sidi-maarouf",
  "gestion-proprietaire-non-resident",
  "opportunite-fonciere-had-soualem",
  "etudes-investissement-agricole",
];
const routes = [
  "/",
  "/about",
  "/invest",
  "/management",
  "/maintenance",
  "/business-plan",
  "/rent-sale",
  "/portfolio",
  "/contact",
  ...projects.map((p) => "/portfolio/" + p),
  "/missing-page",
];
for (const language of ["fr", "en", "ar"]) {
  test(`${language}: all routes, translated content and metadata`, async ({
    page,
  }) => {
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto("/");
    await page.locator(".language-picker select").selectOption(language);
    for (const route of routes) {
      await page.goto(route);
      await expect(page.locator("h1")).toBeVisible();
      await expect(page.locator("html")).toHaveAttribute("lang", language);
      await expect(page.locator("html")).toHaveAttribute(
        "dir",
        language === "ar" ? "rtl" : "ltr",
      );
      const untranslated = await page.evaluate(
        ({ messages, language }) => {
          const found = [];
          const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
          );
          while (walker.nextNode()) {
            const node = walker.currentNode;
            if (
              node.parentElement.closest(
                "script,style,.material-symbols-outlined,.language-picker",
              )
            )
              continue;
            const text = node.textContent.replace(/\s+/g, " ").trim();
            if (messages[text] && messages[text][language] !== text)
              found.push(text);
          }
          for (const element of document.querySelectorAll(
            '[aria-label],[alt],[placeholder],meta[name="description"]',
          )) {
            for (const attr of [
              "aria-label",
              "alt",
              "placeholder",
              "content",
            ]) {
              const text = element.getAttribute(attr);
              if (messages[text] && messages[text][language] !== text)
                found.push(attr + ": " + text);
            }
          }
          return [...new Set(found)];
        },
        { messages, language },
      );
      expect(untranslated, route).toEqual([]);
      expect(await page.title()).not.toBe("");
    }
    expect(errors).toEqual([]);
  });
}

test("language switches preserve form input and stored preference", async ({
  page,
}) => {
  await page.goto("/contact");
  await page.locator('[name="name"]').fill("Test Keyvostra");
  await page.locator('[name="service"]').selectOption("Business Plan");
  await page.locator(".language-picker select").selectOption("ar");
  await expect(page.locator('[name="name"]')).toHaveValue("Test Keyvostra");
  await expect(page.locator('[name="service"]')).toHaveValue("Business Plan");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "ar");
  await page.locator(".language-picker select").selectOption("en");
  await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
});

test("silent introduction, written presentation and keyboard dismissal", async ({
  page,
}) => {
  await page.goto("/");
  await page.locator(".language-picker select").selectOption("en");
  await page.locator(".greeting-preview").click();
  const dialog = page.locator(".greeting-dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.locator(".greeting-introduction")).toHaveCount(2);
  await expect(dialog).toContainText("five areas of expertise");
  await expect(dialog.locator("video")).toHaveJSProperty("muted", true);
  await expect(dialog.locator("source")).toHaveAttribute(
    "src",
    "/videos/founder-explaining.mp4",
  );
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(page.locator(".greeting-preview")).toBeFocused();
});

test("LinkedIn clicks open the exact profile in a new tab", async ({
  page,
  context,
}) => {
  const destination = "https://www.linkedin.com/in/achraf-aitoukrim-444452266/";
  await context.route("https://www.linkedin.com/**", (route) =>
    route.fulfill({
      body: "LinkedIn destination intercepted for navigation verification",
    }),
  );
  await page.goto("/");
  await expect(page.locator(".founder-showcase")).toBeVisible();
  const links = page.locator('a[href*="linkedin.com"]');
  expect(await links.count()).toBeGreaterThanOrEqual(4);
  for (const link of await links.all()) {
    await expect(link).toHaveAttribute("href", destination);
    await expect(link).toHaveAttribute("target", "_blank");
  }
  const popupPromise = page.waitForEvent("popup");
  await page.locator(".browser-address").click();
  const popup = await popupPromise;
  await expect(popup).toHaveURL(destination);
  await popup.close();
  await page.locator(".device-switch button").nth(1).click();
  const mobilePopupPromise = page.waitForEvent("popup");
  await page.locator(".profile-mobile .showcase-linkedin").click();
  const mobilePopup = await mobilePopupPromise;
  await expect(mobilePopup).toHaveURL(destination);
});

for (const width of [360, 390, 768, 1440]) {
  test(`Arabic layout and navigation at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.locator(".language-picker select").selectOption("ar");
    await expect(page.locator("h1")).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
    ).toBe(true);
    const picker = await page.locator(".language-picker").boundingBox();
    expect(picker.x).toBeGreaterThanOrEqual(0);
    expect(picker.x + picker.width).toBeLessThanOrEqual(width);
    if (width < 768) {
      await page.locator(".menu-toggle").click();
      await expect(page.locator("#mobile-nav")).toBeVisible();
      await page.locator("#mobile-nav a").first().click();
      await expect(page.locator("#mobile-nav")).toHaveCount(0);
    }
    await page.screenshot({
      path: `test-results/home-ar-${width}.png`,
      fullPage: true,
    });
  });
}

test("translation catalogue has all three languages and every literal translation key", async () => {
  const { parse } = await import("@babel/parser");
  for (const [key, value] of Object.entries(messages)) {
    for (const language of ["fr", "en", "ar"])
      expect(value[language], `${key}: ${language}`).toBeTruthy();
  }
  const walk = (node) => {
    if (!node || typeof node !== "object") return;
    if (
      node.type === "CallExpression" &&
      node.callee.name === "t" &&
      node.arguments[0]?.type === "StringLiteral"
    ) {
      const key = node.arguments[0].value.replace(/\s+/g, " ").trim();
      if (key)
        expect(messages[key], `Missing translation: ${key}`).toBeDefined();
    }
    for (const [key, value] of Object.entries(node)) {
      if (["loc", "extra"].includes(key)) continue;
      if (Array.isArray(value)) value.forEach(walk);
      else if (value && typeof value === "object") walk(value);
    }
  };
  for (const directory of ["src/components", "src/pages"]) {
    for (const file of fs
      .readdirSync(directory)
      .filter((f) => f.endsWith(".jsx")))
      walk(
        parse(fs.readFileSync(`${directory}/${file}`, "utf8"), {
          sourceType: "module",
          plugins: ["jsx"],
        }),
      );
  }
});
