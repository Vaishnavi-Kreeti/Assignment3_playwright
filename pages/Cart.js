class Cart {

    constructor(page) {
        this.page = page
        this.heading= page.getByText('Your Cart', { exact: true })
        this.checkout_btn=page.getByRole('link', { name: 'Checkout' })
        
    }

}
module.exports = { Cart }