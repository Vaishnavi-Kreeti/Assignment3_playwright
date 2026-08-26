class Checkout_1{
    constructor(page){
        this.page=page;
        this.first_name=page.getByRole('textbox', { name: 'First Name' })
        this.last_name=page.getByRole('textbox', { name: 'Last Name' })
        this.zip=page.getByRole('textbox', { name: 'Zip/Postal Code' })
        this.cancel_btn=page.getByRole('link', { name: 'Cancel' })
        this.continue_btn=page.getByRole('button', { name: 'Continue' })
        this.heading=page.getByText('Checkout: Your Information', { exact: true })
        this.card=page.locator('#checkout-form')
    }
}
module.exports = { Checkout_1 }