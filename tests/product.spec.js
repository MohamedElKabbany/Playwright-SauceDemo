const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductPage = require('../pages/ProductPage');

test.describe('Product Tests', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Verify all products are displayed', async ({ page }) => {
    const productPage = new ProductPage(page);
    await expect(productPage.products).toHaveCount(6);
  });

  test('Validate product details are displayed', async ({ page }) => {
    const productPage = new ProductPage(page);
    const { productNames, productPrices , productDescriptions } = await productPage.getProductDetails();
    expect(productNames).toBeTruthy();
    expect(productPrices).toBeTruthy();
    expect(productDescriptions).toBeTruthy();
  });

  test('Validate on sorting by name functionality', async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.sortBy('za');
    const productNames = await productPage.getProductNames();
    const sortedNames = [...productNames].sort((a, b) => b.localeCompare(a));
    expect(productNames).toEqual(sortedNames);
  });

  test('Validate on sorting by price functionality', async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.sortBy('hilo');
    const productPrices = await productPage.getProductPrices();
    const sortedPrices = [...productPrices].sort((a, b) => parseFloat(b.slice(1)) - parseFloat(a.slice(1)));
    expect(productPrices).toEqual(sortedPrices);
  });
});