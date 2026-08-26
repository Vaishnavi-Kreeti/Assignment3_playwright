class ProductsPage {

    constructor(page) {
        this.page = page
        this.title=page.locator(".page-title")
        this.card= page.locator('#inventory-grid').locator('article').nth(0)
        this.name=page.getByRole('link', { name: 'TTA Junior Tester Onesie' })
        this.img=page.getByRole('link').filter({ hasText: 'test.all()' })
        this.price=page.getByRole('link').filter({ hasText: 'test.all()' })
        this.addtocart_button=page.getByRole('button',{name:'Add to cart'}).first()
        this.dropdown=page.getByRole('combobox', { name: 'Sort products' })
        this.remove_btn=page.getByRole("button", { name: "Remove" })
    }
     

}

module.exports = { ProductsPage }
