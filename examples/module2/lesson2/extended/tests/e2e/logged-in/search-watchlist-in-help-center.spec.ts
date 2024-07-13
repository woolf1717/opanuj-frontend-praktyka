import { expect, test } from '../../../fixtures';

import { MainPage } from '../../../pages/main.page';

const SEARCH_TERM = 'watchlist';

test('check if seach works properly', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();

  await page.getByTitle('The hub for editors').click();
  await page.goto('https://en.wikipedia.org/wiki/Wikipedia:Help_desk');

  await page
    .getByRole('cell', { name: 'Search the frequently asked' })
    .getByRole('textbox')
    .fill(SEARCH_TERM);

  await page
    .getByRole('button', { name: 'Search the frequently asked' })
    .click();

  // eslint-disable-next-line playwright/no-wait-for-selector
  await page.waitForSelector('.searchresult');

  const searchResults = await page.locator('.searchresult');

  const count = await searchResults.count();

  expect(count).toBeGreaterThan(0);

  for (let i = 0; i < count; i++) {
    const searchResultText = await searchResults.nth(i).textContent();
    expect(searchResultText).toMatch(new RegExp(SEARCH_TERM, 'i'));
  }
});
