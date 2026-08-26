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
        this.first_alert=page.getByText('Error: First Name is required')
        this.last_alert=page.getByText('Error: Last Name is required')
        this.zip_alert=page.getByText('Error: Postal Code is required')
    }
     async order(first_name, last_name,zip) {

        await this.first_name.fill(first_name)
        await this.last_name.fill(last_name)
        await this.zip.fill(zip)
        await this.continue_btn.click();
    }
}
module.exports = { Checkout_1 }