class BasePage {

    constructor(page) {
        this.page = page;
        this.url="https://app.thetestingacademy.com/playwright/ttacart/";
        this.hamburger = page.locator(
            "path[d='M4 6h16M4 12h16M4 18h16']"
        );

        this.cart = page.locator(
            "//a[@id='shopping_cart_container']//*[name()='svg']"
        );

        this.cart_count = page.locator(".cart-badge");
    }

  
}

module.exports = { BasePage };