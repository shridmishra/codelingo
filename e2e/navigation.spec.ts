import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/CodeLingo/);
});

test('redirects to learn', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/.*\/learn/);
});

test('learn page has topics', async ({ page }) => {
  await page.goto('/learn');
  await expect(page.getByRole('heading', { name: 'Topics' })).toBeVisible();
  await expect(page.getByText('HTML', { exact: true })).toBeVisible();
});
