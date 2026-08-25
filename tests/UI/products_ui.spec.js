import { LoginPage } from '../../pages/LoginPage';
import { BasePage } from '../../pages/BasePage';
import { ProductsPage } from '../../pages/ProductsPage';
import {Cart} from '../../pages/Cart';
const {test,expect}=require('@playwright/test')

test.beforeEach(async ({ page }) => {
     const basepage=new BasePage(page);
    await page.goto(basepage.url)
    await expect(page).toHaveTitle("TTACart - Login");
    
});

test("products ui",async function ({page}){
    const loginpage=new LoginPage(page);
    const basepage=new BasePage(page);
    const productpage=new ProductsPage(page);
    const cartpage=new Cart(page);
    //login
    await loginpage.login("standard_user", "tta_secret")
    await expect(page).toHaveURL(/inventory/)
    await expect(page).toHaveTitle("TTACart - Products");
    await expect(productpage.title).toHaveText("Products")
    //cart button
    await expect(basepage.cart).toBeEnabled()
    await basepage.cart.click()
    await expect(page).toHaveTitle("TTACart - Your Cart")
    await cartpage.continue_btn.click()
    await expect(page).toHaveURL(/inventory/)
    //product card
    await expect(productpage.card).toBeVisible()
    await expect(productpage.img).toBeVisible()
    await expect(productpage.name).toBeVisible()
    await expect(productpage.name).toBeEnabled()
    await expect(productpage.price).toBeVisible()
    await expect(productpage.addtocart_button).toBeVisible()
    await expect(productpage.addtocart_button).toBeEnabled()
    // product_des_page
    await productpage.name.click()
    await expect(page).toHaveURL(/tta-junior-tester-onesie/)
    await expect(page.getByRole("heading", "Product Details")).toBeVisible()
    await page.getByRole('button', { name: 'Add to cart' }).click()
    await expect(page.getByRole('button', { name: 'Remove' })).toHaveText("Remove")
    await page.getByRole('button', { name: 'Back' }).click()
    await expect(page).toHaveURL(/inventory/)
    //remove button count==cart item
    const randnum = Math.floor(Math.random() * 5) + 1;
    for (let i=1;i<=randnum;i++){
        await productpage.addtocart_button.click()
    }
    const count=await page.getByRole('button', { name: 'Remove' }).count()
    await expect(basepage.cart_count).toHaveText(String(count))
})