class CartPage {

    constructor(page) {
      this.page = page;
      this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
      this.removeFromCartButton = page.locator('#remove-sauce-labs-backpack');
      this.cartBadge = page.locator('.shopping_cart_badge');
      this.cartButton = page.locator('#shopping_cart_container');
      this.checkoutButton = page.locator('.checkout_button');
      this.firstNameInput = page.locator('#first-name');
      this.lastNameInput = page.locator('#last-name');
      this.postalCodeInput = page.locator('#postal-code');
      this.continueButton = page.locator('#continue');
      this.finishButton = page.locator('#finish');
      this.successMessage = page.locator('.complete-header');
    }
  
    async addToCart() {
      await this.addToCartButton.click();
    }
  
    async removeFromCart() {
      await this.removeFromCartButton.click();
    }
  
    async goToCart() {
      await this.cartButton.click();
    }
  
    async checkout(firstName, lastName, postalCode) {
      await this.checkoutButton.click();
      await this.firstNameInput.fill(firstName);
      await this.lastNameInput.fill(lastName);
      await this.postalCodeInput.fill(postalCode);
      await this.continueButton.click();
      await this.finishButton.click();
    }
  
  }
  
  module.exports = CartPage;
  