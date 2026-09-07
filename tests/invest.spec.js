import { test, expect } from "@playwright/test";
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() =>
    localStorage.setItem("keyvostra-welcome-seen", "1"),
  );
});

for (const language of ["fr", "en", "ar"]) {
  test(`investment journey in ${language}`, async ({ page }) => {
    await page.goto("/invest");
    await page.locator(".language-picker select").selectOption(language);
    await expect(page.locator(".invest-page h1")).toBeVisible();
    await expect(page.locator(".invest-step")).toHaveCount(5);
    for (const step of await page.locator(".invest-step").all()) {
      if (!((await step.getAttribute("open")) !== null))
        await step.locator("summary").click();
      await expect(step.locator(".invest-step-content")).toBeVisible();
    }
    for (const img of await page.locator(".invest-page img").all()) {
      await img.scrollIntoViewIfNeeded();
      await expect
        .poll(() => img.evaluate((el) => el.naturalWidth))
        .toBeGreaterThan(0);
    }
    await page.locator("#business-plan .invest-text-link").click();
    await expect(page).toHaveURL(/\/business-plan$/);
    await expect(page.locator("html")).toHaveAttribute("lang", language);
    await page.goto("/invest");
    await page.locator(".invest-opening .kv-button").click();
    await expect(page).toHaveURL(/\/contact$/);
  });
}

test("investment layout and reduced motion", async ({ page }) => {
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 950 });
    await page.goto("/invest");
    await page.locator(".language-picker select").selectOption("ar");
    await expect(page.locator(".invest-page h1")).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
    ).toBe(true);
    await expect(page.locator(".invest-opening-copy")).toHaveCSS(
      "animation-name",
      "none",
    );
    await page.locator(".invest-step").nth(2).locator("summary").focus();
    await page.keyboard.press("Enter");
    await expect(page.locator(".invest-step").nth(2)).toHaveAttribute(
      "open",
      "",
    );
    await page.screenshot({
      path: `test-results/invest-ar-${width}.png`,
      fullPage: true,
    });
  }
});

test("investment reveals animate on scroll with motion enabled", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/invest");
  const section = page.locator(".invest-editorial").first();
  await expect(section).toHaveClass(/reveal-waiting/);
  await section.scrollIntoViewIfNeeded();
  await expect(section).not.toHaveClass(/reveal-waiting/);
  await expect(section).toHaveCSS("opacity", "1");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator(".invest-hero-visual > img")).toHaveCSS(
    "animation-name",
    "none",
  );
  await expect(page.locator(".reveal-waiting")).toHaveCount(0);
});
