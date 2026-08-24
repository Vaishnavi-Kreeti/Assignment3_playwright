class BasePage {

    constructor(page) {
        this.page = page
        this.hamburger=page.locator("path[d='M4 6h16M4 12h16M4 18h16']")
        this.cart= page.locator("//a[@id='shopping_cart_container']//*[name()='svg']")
    }

}
module.exports = { BasePage }