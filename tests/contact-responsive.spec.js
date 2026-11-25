import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() =>
    localStorage.setItem("keyvostra-welcome-seen", "1"),
  );
});

const assertNoOverflow = async (page) => {
  expect(await page.evaluate(() => document.documentElement.scrollWidth))
    .toBeLessThanOrEqual(page.viewportSize().width);
  const clippedContacts = await page.locator(
    ".contact-channels:visible .contact-channel-text",
  ).evaluateAll((elements) => elements.filter((el) =>
    el.scrollWidth > el.clientWidth + 1 ||
    el.scrollHeight > el.clientHeight + 1,
  ).map((el) => el.textContent));
  expect(clippedContacts).toEqual([]);
};

const assertNoWidgetOverlap = async (page) => {
  const overlaps = await page.evaluate(() => {
    const contacts = document.querySelectorAll(
      ".contact-section .contact-channels li, .footer-layout a, .footer-bottom a, .footer-bottom button, .footer-reach li, .footer-wordmark",
    );
    const widgets = document.querySelectorAll(
      ".wa-fab, .video-greeting, .mobile-consultation",
    );
    const intersect = (a, b) => a.width && a.height && b.width && b.height &&
      a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
    return [...contacts].filter((contact) => {
      const bounds = contact.getBoundingClientRect();
      return [...widgets].some((widget) => intersect(bounds, widget.getBoundingClientRect()));
    }).map((el) => el.textContent);
  });
  expect(overlaps).toEqual([]);
};

for (const width of [320, 375, 390, 430, 768]) {
  test(`compact contacts and unobscured footer at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ["/", "/contact"]) {
      await page.goto(route);
      const section = page.locator(".contact-section");
      await expect(section).toBeVisible();
      await page.evaluate(() => document.fonts.ready);
      await expect(section).toHaveCSS("padding", "40px 22px");
      await expect(section).toHaveCSS("background-color", "rgb(248, 241, 228)");
      await expect(section.locator(".contact-channels")).toHaveCount(0);
      await expect(page.locator(".contact-channels")).toHaveCount(2);
      const countries = page.locator(".footer-reach .contact-channels");
      await expect(countries).toHaveCount(2);
      await expect(countries.nth(0)).toContainText("Maroc");
      await expect(countries.nth(1)).toContainText("Royaume-Uni");
      const morocco = await countries.nth(0).boundingBox();
      const uk = await countries.nth(1).boundingBox();
      expect(uk.x).toBe(morocco.x);
      expect(uk.y - morocco.y - morocco.height).toBeGreaterThanOrEqual(24);
      expect(uk.y - morocco.y - morocco.height).toBeLessThanOrEqual(32);
      for (const selector of [".contact-section", ".footer-reach", ".footer-bottom"]) {
        await page.locator(selector).scrollIntoViewIfNeeded();
        await expect(page.locator(".floating-widgets")).toHaveClass(/is-docked/);
        await assertNoOverflow(page);
        await assertNoWidgetOverlap(page);
      }
      await expect(page.locator(".kv-footer")).toHaveCSS("padding", "32px 22px 24px");
      await expect(page.locator(".kv-footer")).toHaveCSS("background-color", "rgb(248, 241, 228)");
      await expect(page.locator(".footer-reach")).toHaveCSS("row-gap", "32px");
      const channels = page.locator(".footer-reach");
      await expect(channels.locator(".contact-channel-tile").first()).toHaveCSS("width", "20px");
      await expect(channels.locator(".contact-channel-tile").first()).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
      await expect(channels.locator(".contact-icon")).toHaveCount(7);
      await expect(channels.locator("strong").first()).toHaveCSS("font-size", "16px");
      await expect(channels.locator("strong").first()).toHaveCSS("line-height", "24px");
      await expect(channels.locator("small").first()).toHaveCSS("font-size", "14px");
      await expect(channels.locator("small").first()).toHaveCSS("line-height", "20px");
      await expect(channels.locator('a[href="mailto:keyvostrauk.advisory@gmail.com"]'))
        .toContainText("keyvostrauk.advisory@gmail.com");
      await expect(channels.locator('a[href="tel:+447759017924"]')).toHaveCount(1);
      await expect(channels.locator('a[href="tel:+212684414018"]')).toHaveCount(1);
      await expect(channels.locator('a[href^="https://wa.me/212777884649"]')).toHaveCount(1);
      for (const link of await page.locator(".kv-footer a:visible, .kv-footer button:visible").all()) {
        const bounds = await link.boundingBox();
        expect(bounds.width).toBeGreaterThanOrEqual(44);
        expect(bounds.height).toBeGreaterThanOrEqual(44);
      }
      const wordmark = page.locator(".footer-wordmark");
      const signature = await wordmark.locator("span").boundingBox();
      expect(signature.width).toBeGreaterThan((width - 44) * 0.95);
      expect(signature.x).toBeGreaterThanOrEqual(22);
      expect(signature.x + signature.width).toBeLessThanOrEqual(width - 22);
      expect(await wordmark.evaluate((el) => el === el.parentElement.lastElementChild)).toBe(true);
      await page.evaluate(() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "instant" }));
      await assertNoWidgetOverlap(page);
      await assertNoOverflow(page);
      await page.screenshot({ path: `test-results/footer-bottom-${route === "/" ? "home" : "contact"}-${width}.png` });
      const slug = route === "/" ? "home" : "contact";
      await page.locator(".footer-reach").screenshot({
        path: `test-results/${slug}-footer-${width}.png`,
      });
      await section.screenshot({ path: `test-results/${slug}-contact-${width}.png` });
    }
  });
}

test("mobile video opens by touch, closes and restores focus; WhatsApp opens its destination", async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 320, height: 740 }, hasTouch: true, reducedMotion: "reduce",
  });
  await context.addInitScript(() => localStorage.setItem("keyvostra-welcome-seen", "1"));
  await context.route("https://wa.me/**", (route) => route.fulfill({ body: "WhatsApp" }));
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:5173/");
  await page.locator(".contact-section").waitFor();
  await expect(page.locator(".greeting-preview")).toHaveCount(0);
  const opener = page.locator(".greeting-reopen");
  await expect(opener).toBeVisible();
  await opener.tap();
  await expect(page.locator(".greeting-dialog")).toBeVisible();
  await page.locator(".greeting-dialog-close").tap();
  await expect(page.locator(".greeting-dialog")).not.toBeVisible();
  await expect(opener).toBeFocused();
  await page.evaluate(() => window.scrollTo({ top: 600, behavior: "instant" }));
  const consultation = page.locator(".mobile-consultation a");
  await expect(consultation).toBeInViewport();
  await consultation.tap();
  await expect(page).toHaveURL(/\/#contact$/);
  await expect(page.locator(".floating-widgets")).toHaveClass(/is-docked/);
  await expect(consultation).not.toBeVisible();
  await page.locator(".kv-footer").scrollIntoViewIfNeeded();
  await expect(page.locator(".floating-widgets")).toHaveClass(/is-docked/);
  await opener.scrollIntoViewIfNeeded();
  await opener.tap();
  await expect(page.locator(".greeting-dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(opener).toBeFocused();
  const popupReady = page.waitForEvent("popup");
  await page.locator(".wa-fab").tap();
  const popup = await popupReady;
  await expect(popup).toHaveURL(/^https:\/\/wa.me\/212777884649\?text=/);
  await context.close();
});

test("English and Arabic contacts wrap at 320px and 768px", async ({ page }) => {
  for (const width of [320, 768]) {
    await page.setViewportSize({ width, height: 900 });
    for (const language of ["en", "ar"]) {
      await page.goto("/contact");
      await page.locator(".language-picker select").selectOption(language);
      await page.locator(".footer-reach").scrollIntoViewIfNeeded();
      await expect(page.locator(".floating-widgets")).toHaveClass(/is-docked/);
      await assertNoOverflow(page);
      await assertNoWidgetOverlap(page);
      await page.locator(".footer-reach").screenshot({
        path: `test-results/footer-${language}-${width}.png`,
      });
    }
  }
});

test("desktop uses country columns and docks widgets before the wordmark", async ({ page }) => {
  for (const width of [1024, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/");
    await page.locator(".contact-section").waitFor();
    await expect(page.locator(".greeting-preview")).toBeVisible();
    await expect(page.locator(".floating-widgets")).toHaveCSS("display", "contents");
    await page.goto("/contact");
    await page.locator(".contact-section").waitFor();
    await assertNoOverflow(page);
    const countries = page.locator(".footer-reach .contact-channels");
    const morocco = await countries.nth(0).boundingBox();
    const uk = await countries.nth(1).boundingBox();
    expect(uk.y).toBe(morocco.y);
    expect(uk.x).toBeGreaterThan(morocco.x + morocco.width);
    await expect(page.locator(".footer-reach .contact-channel-tile").first()).toHaveCSS("width", "20px");
    await page.locator(".kv-footer").scrollIntoViewIfNeeded();
    await expect(page.locator(".floating-widgets")).toHaveClass(/is-footer-visible/);
    await assertNoWidgetOverlap(page);
    await expect(page.locator(".greeting-reopen")).toBeVisible();
    const wordmark = await page.locator(".footer-wordmark span").boundingBox();
    expect(wordmark.x).toBeGreaterThanOrEqual(24);
    expect(wordmark.x + wordmark.width).toBeLessThanOrEqual(width - 24);
    await page.locator(".kv-footer").screenshot({ path: `test-results/footer-desktop-${width}.png` });
  }
});
