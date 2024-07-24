class LoginPage {

    constructor(page) {
      this.page = page;
      this.usernameInput = page.locator('#user-name');
      this.passwordInput = page.locator('#password');
      this.loginButton = page.locator('#login-button');
      this.errorMessage = page.locator('.error-message-container');
      this.burgerButton = page.locator('#react-burger-menu-btn');
      this.logoutButton = page.locator('#logout_sidebar_link');
    }
  
    async goto() {
      await this.page.goto('https://www.saucedemo.com/');
    }
  
    async login(username, password) {
      await this.usernameInput.fill(username);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    }

    async logout() {
        await this.burgerButton.click();
        await this.logoutButton.click();
      }
  }
  
  module.exports = LoginPage;
  