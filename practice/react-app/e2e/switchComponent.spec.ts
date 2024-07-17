import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.goto('http://localhost:3000/');
  await page.getByText('TanStack QuerySearch').click();

  await page.getByRole('switch', { name: 'Notifications' }).click();

  expect(
    await page
      .getByRole('switch', { name: 'Notifications' })
      .getAttribute('aria-checked')
  ).toBe('true');

  await page.keyboard.down('Space');
  expect(
    await page
      .getByRole('switch', { name: 'Notifications' })
      .getAttribute('aria-checked')
  ).toBe('false');

  await page.keyboard.down('Enter');
  expect(
    await page
      .getByRole('switch', { name: 'Notifications' })
      .getAttribute('aria-checked')
  ).toBe('true');
});
