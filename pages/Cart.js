class Cart {

    constructor(page) {
        this.page = page
        this.heading= page.getByText('Your Cart', { exact: true })
        this.checkout_btn=page.getByRole('link', { name: 'Checkout' })
        this.continue_btn=page.locator(".btn-continue")
        this.remove_btn=page.getByRole('button', { name: 'Remove' })
        this.empty_txt=page.getByText("Your cart is empty.", { exact: true })
    }

}
module.exports = { Cart }