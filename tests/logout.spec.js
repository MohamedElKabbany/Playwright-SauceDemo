const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test.describe('Logout Functionality', () => {

  test('Logout functionality', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.logout();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });
});
