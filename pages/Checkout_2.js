class Checkout_2{
    constructor(page){
        this.page=page;
        this.card=page.locator('#checkout-summary')
        this.cancel_btn=page.getByRole('link', { name: 'Cancel' })
        this.finish_btn=page.getByRole('button', { name: 'Finish' })
        this.heading=page.getByText('Checkout: Overview', { exact: true })
    }
}
module.exports = { Checkout_2 }