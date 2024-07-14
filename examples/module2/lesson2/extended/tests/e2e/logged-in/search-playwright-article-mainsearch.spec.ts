import { expect, test } from '../../../fixtures';

import { MainPage } from '../../../pages/main.page';

test('Search for first article connected to Playwright', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();

  await page.getByPlaceholder('Search Wikipedia').nth(0).fill('playwright');
  await page.getByRole('button', { name: 'Search' }).click();

  page.locator('#content');
  const pageContent = page.locator('#content');

  await expect(pageContent).toContainText(/playwright/);
});
