class ProductsPage {

    constructor(page) {
        this.page = page
        this.card= page.locator('#inventory-grid').locator('article').nth(0)
        this.name=page.getByRole('link', { name: 'TTA Junior Tester Onesie' })
        this.img=page.getByRole('link').filter({ hasText: 'test.all()' })
        this.price=page.getByRole('link').filter({ hasText: 'test.all()' })
        this.addtocart_button=page.locator("button[data-test='add-to-cart-tta-junior-tester-onesie']")
    }
     

}

module.exports = { ProductsPage }
