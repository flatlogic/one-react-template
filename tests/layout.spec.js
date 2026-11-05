const { test, expect } = require('@playwright/test');

test('login, dashboard, charts, tables, typography and logout work', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => { errors.push(error.message); console.error(error.message); });
  await page.goto('./');
  await expect(page.getByRole('heading', { name: 'Login', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await expect(page).toHaveURL(/#\/app\/main\/dashboard$/);
  await expect(page.locator('main svg').first()).toBeVisible();
  await page.screenshot({ path: 'test-results/dashboard.png', fullPage: true });
  await page.locator('a[href="#/app/tables"]').click();
  await expect(page.locator('main table').first()).toBeVisible();
  await page.locator('a[href="#/app/typography"]').click();
  await expect(page.locator('main')).toContainText('Typography');
  await page.goto('./#/app/ui/charts');
  const chart = page.locator('section').filter({ has: page.getByText('Echarts Line Chart', { exact: true }) });
  await expect(chart.locator('canvas').first()).toBeVisible();
  await expect(chart.locator('[data-zr-dom-id]')).toHaveAttribute('width', /^[1-9]\d*$/);
  await page.getByText('Logout', { exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Login', exact: true })).toBeVisible();
  expect(errors).toEqual([]);
});
