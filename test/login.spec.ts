import { test, expect } from '@playwright/test';

test('Demo test - Open Playwright homepage', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
