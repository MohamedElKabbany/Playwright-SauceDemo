const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const CartPage = require('../pages/CartPage');

test.describe('Visual Regression Testing', () => {

  test('Capture screenshots of key pages @visual', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(page).toHaveScreenshot();
    //expect(await page.screenshot()).toMatchSnapshot('loginPage.png');
    
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveScreenshot();
    //expect(await page.screenshot()).toMatchSnapshot('productPage.png');

    const cartPage = new CartPage(page);
    await cartPage.addToCart();
    await cartPage.goToCart();
    await expect(page).toHaveScreenshot();
    //expect(await page.screenshot()).toMatchSnapshot('cartPage.png');
  });
});
