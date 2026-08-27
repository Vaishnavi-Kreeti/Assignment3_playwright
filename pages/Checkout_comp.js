class Checkout_comp{
    constructor(page){
        this.page=page;
        this.card=page.locator('[data-test="checkout-complete-container"]')
        this.back_btn=page.getByRole('link', { name: 'Back Home' })
        this.heading=page.getByText('Checkout: Complete!', { exact: true })
    }
}
module.exports = { Checkout_comp }