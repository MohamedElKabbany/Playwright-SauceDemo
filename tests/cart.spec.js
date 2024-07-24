const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const CartPage = require('../pages/CartPage');

test.describe('Cart Tests', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Add product to cart', async ({ page }) => {
    const cartPage = new CartPage(page);
    await cartPage.addToCart();
    await expect(cartPage.cartBadge).toHaveText("1");
  });

  test('Remove product from cart', async ({ page }) => {
    const cartPage = new CartPage(page);
    await cartPage.addToCart();
    await cartPage.removeFromCart();
    await expect(cartPage.cartBadge).not.toBeVisible();
  });

  test('Test checkout process', async ({ page }) => {
    const cartPage = new CartPage(page);
    await cartPage.addToCart();
    await cartPage.goToCart();
    await cartPage.checkout('Test', 'User', '12345');
    await expect(cartPage.successMessage).toHaveText('Thank you for your order!');
    //await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
  });
});
