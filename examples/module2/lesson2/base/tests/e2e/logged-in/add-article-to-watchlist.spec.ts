import test, { expect } from '@playwright/test';

import { ArticlePage } from '../../../pages/article.page';
import { MainPage } from '../../../pages/main.page';
import { describe } from 'vitest';

describe('playwright meets vitest', () => {
  test.afterEach(async ({ page }) => {
    const articlePage = new ArticlePage(page);
    await articlePage.clickUnwatchButton();

    await expect(articlePage.getWatchButton()).toBeVisible();
  });

  test('add featured article to watchlist', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate();
    await mainPage.goToFeaturedArticle();

    const articlePage = new ArticlePage(page);
    await articlePage.clickWatchButton();

    await expect(articlePage.getUnwatchButton()).toBeVisible();
  });
});
