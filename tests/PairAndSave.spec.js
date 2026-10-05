import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.tropicalsmoothiecafe.com/menu/pair-and-save');
  await page.getByRole('tab', { name: 'Pair & Save' }).click();
  await page.getByRole('heading', { name: 'Pair & Save' }).click();
  await page.getByText('Smoothie And 2 Toasted Snack').click();
  await page.goto('https://www.tropicalsmoothiecafe.com/menu/pair-and-save');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('button', { name: 'Open details for Smoothie And 2 Toasted Snack Rolls description' }).click();
});