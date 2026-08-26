class Product_Des{
    constructor(page){
        this.page=page;
        this.title=page.getByText('Product Details')
        this.addtocart_btn=page.getByRole("button", { name: "Add to cart" });
        this.remove_btn=page.getByRole("button", { name: "Remove" });
        this.back=page.getByRole("button", { name: "Back" });
    }
}
module.exports={Product_Des}