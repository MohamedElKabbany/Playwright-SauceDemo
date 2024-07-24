class ProductPage {
    
    constructor(page) {
      this.page = page;
      this.products = page.locator('.inventory_item');
      this.productNames = page.locator('.inventory_item_name');
      this.productPrices = page.locator('.inventory_item_price');
      this.productDescriptions = page.locator('.inventory_item_desc');
      this.sortDropdown = page.locator('.product_sort_container');
    }
  
    async getProductDetails() {
      const productNames = await this.productNames.allTextContents();
      const productPrices = await this.productPrices.allTextContents();
      const productDescriptions = await this.productDescriptions.allTextContents();
      return { productNames, productPrices , productDescriptions };
    }

    async getProductNames() {
        const productNames = await this.productNames.allTextContents();
        return productNames;
      }

    async getProductPrices() {
        const productPrices = await this.productPrices.allTextContents();
        return productPrices;
      }
  
    async sortBy(option) {
      await this.sortDropdown.selectOption(option);
    }
  }
  
  module.exports = ProductPage;
  