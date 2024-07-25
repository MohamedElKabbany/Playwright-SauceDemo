# SauceDemo E2E Tests

## Project Overview

This project includes end-to-end (E2E) tests for the Sauce Labs demo app using Playwright and JavaScript. The tests cover essential functionalities to ensure the application behaves as expected.

## Scenarios Covered

1. **Login Functionality**
   - Valid login with correct credentials.
   - Invalid login with incorrect credentials.
   - Display of appropriate error messages for invalid login attempts.

2. **Product Page**
   - Verification that all products are displayed correctly.
   - Validation of product details (name, price, and description).
   - Testing of sorting functionality to ensure products are sorted correctly by price and name.

3. **Shopping Cart**
   - Adding a product to the shopping cart and verifying that the cart is updated.
   - Removing a product from the cart and ensuring the cart is updated correctly.
   - Testing the checkout process, ensuring all steps are completed successfully.
   - Verifying that the shopping cart badge count updates correctly when items are added or removed.

4. **User Logout**
   - Testing the logout functionality to ensure users are redirected to the login page after logging out.

5. **Visual Regression Testing**
   - Capturing screenshots of key pages (login, product, cart) and comparing them against baseline images to detect any visual changes.

## Project Setup

### Prerequisites

- Install [Node.js](https://nodejs.org/)
- Install [npm](https://www.npmjs.com/)
- Clone the Repo [Github](https://github.com/MohamedElKabbany/playwright-saucedemo)

### Running the Tests

- npx playwright test