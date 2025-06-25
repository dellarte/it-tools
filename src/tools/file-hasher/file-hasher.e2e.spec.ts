import { test, expect } from '@playwright/test';

test.describe('Tool - File hasher', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/file-hasher');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('File hasher - IT Tools');
  });

  test('', async ({ page }) => {

  });
});