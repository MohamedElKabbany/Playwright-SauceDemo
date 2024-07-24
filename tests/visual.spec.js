const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const CartPage = require('../pages/CartPage');

test.describe('Visual Regression Testing', () => {

  test('Capture screenshots of key pages', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(page).toHaveScreenshot();
    
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveScreenshot();

    const cartPage = new CartPage(page);
    await cartPage.addToCart();
    await cartPage.goToCart();
    await expect(page).toHaveScreenshot();
  });
});