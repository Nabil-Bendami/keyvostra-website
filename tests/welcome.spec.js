import { test, expect } from "@playwright/test";

test("first visit, language selection, enter, persistence and replay", async ({
  page,
}) => {
  await page.goto("/");
  const intro = page.locator(".welcome-intro");
  await expect(intro).toBeVisible();
  await expect(page.locator(".welcome-enter")).toBeFocused();
  await page.locator('.welcome-languages [lang="ar"]').click();
  await expect(intro).toContainText("مرحبًا بكم في");
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  await page.locator(".welcome-enter").click();
  await expect(intro).not.toBeVisible();
  await expect(page.locator("#main-content")).toBeFocused();
  await page.reload();
  await expect(
    page.locator("h1").filter({ hasNot: page.locator("#welcome-title") }),
  ).not.toHaveCount(0);
  await expect(intro).not.toBeVisible();
  await page.locator(".welcome-replay").click();
  await expect(intro).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(intro).not.toBeVisible();
  await expect(page.locator(".welcome-replay")).toBeFocused();
});

test("skip keeps deep link and modal contains keyboard focus", async ({
  page,
}) => {
  await page.goto("/invest#parcours");
  await expect(page.locator(".welcome-intro")).toBeVisible();
  for (let i = 0; i < 9; i++) {
    await page.keyboard.press("Tab");
    expect(
      await page.evaluate(
        () => document.activeElement.closest(".welcome-intro") !== null,
      ),
    ).toBe(true);
  }
  await page.locator(".welcome-skip").click();
  await expect(page.locator(".welcome-intro")).not.toBeVisible();
  await expect(page).toHaveURL(/\/invest#parcours$/);
});

test("welcome works when storage is unavailable", async ({ page }) => {
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => {
      throw new Error("blocked");
    };
    Storage.prototype.setItem = () => {
      throw new Error("blocked");
    };
  });
  await page.goto("/");
  await expect(page.locator(".welcome-intro")).toBeVisible();
  await page.locator(".welcome-enter").click();
  await expect(page.locator(".welcome-intro")).not.toBeVisible();
});

test("handwriting animation and mobile reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  await expect(page.locator(".welcome-handwriting path").first()).toHaveCSS(
    "animation-name",
    "welcome-write",
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.locator(".welcome-handwriting path").first()).toHaveCSS(
    "animation-name",
    "none",
  );
  await expect(page.locator(".welcome-handwriting path").first()).toHaveCSS(
    "stroke-dashoffset",
    "0px",
  );
  expect(
    await page
      .locator(".welcome-intro")
      .evaluate((el) => el.scrollWidth <= el.clientWidth),
  ).toBe(true);
  await page.screenshot({ path: "test-results/welcome-mobile.png" });
});

test("preview link replays both words for returning visitors", async ({
  page,
}) => {
  await page.addInitScript(() =>
    localStorage.setItem("keyvostra-welcome-seen", "1"),
  );
  await page.goto("/?intro=1");
  await expect(page.locator(".welcome-intro")).toBeVisible();
  const hello = page.locator(".welcome-handwriting path").first();
  const brand = page.locator(".welcome-brand-handwriting path").first();
  const offset = (locator) =>
    locator.evaluate((el) => parseFloat(getComputedStyle(el).strokeDashoffset));
  // Check the actual painted stroke progresses, not just an animation name.
  await expect
    .poll(
      async () => {
        const n = await offset(hello);
        return n > 0 && n < 100;
      },
      { intervals: [50], timeout: 2500 },
    )
    .toBe(true);
  await expect(brand).toHaveCSS("stroke-dashoffset", "100px");
  await expect
    .poll(
      async () => {
        const n = await offset(brand);
        return n > 0 && n < 100;
      },
      { intervals: [50], timeout: 4000 },
    )
    .toBe(true);
  await expect(
    page.locator(".welcome-brand-handwriting path").last(),
  ).toHaveCSS("stroke-dashoffset", "0px", { timeout: 5000 });
  await page.locator(".welcome-restart").click();
  await expect(
    page.locator(".welcome-brand-handwriting path").first(),
  ).toHaveCSS("stroke-dashoffset", "100px");
  await expect
    .poll(
      async () => {
        const n = await offset(hello);
        return n > 0 && n < 100;
      },
      { intervals: [50], timeout: 2500 },
    )
    .toBe(true);
});

test("explicit replay draws lettering with reduced motion without ambient movement", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.locator(".welcome-brand-handwriting path").first(),
  ).toHaveCSS("animation-name", "none");
  await page.locator(".welcome-restart").click();
  await expect(
    page.locator(".welcome-brand-handwriting path").first(),
  ).toHaveCSS("animation-name", "welcome-write");
  await expect(page.locator(".welcome-glow").first()).toHaveCSS(
    "animation-name",
    "none",
  );
  await page.keyboard.press("Escape");
  await expect(page.locator(".welcome-intro")).not.toBeVisible();
});
