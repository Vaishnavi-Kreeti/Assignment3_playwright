import { LoginPage } from '../../pages/LoginPage';
import { BasePage } from '../../pages/BasePage';
import { ProductsPage } from '../../pages/ProductsPage';
import { Cart } from '../../pages/Cart';
const {test,expect}=require('@playwright/test')


test("cart test",async function ({page}){
    const loginpage=new LoginPage(page);
    const basepage=new BasePage(page);
    const productpage=new ProductsPage(page);
    const cart=new Cart(page);
    //login
    await page.goto(basepage.url)
    await loginpage.login("standard_user", "tta_secret")
    await expect(page).toHaveURL(/inventory/)
    await productpage.addtocart_button.click()
    await productpage.addtocart_button.click()
    await basepage.cart.click()
    //cart_ui
    await expect(cart.heading).toBeVisible()
    await expect(cart.heading).toHaveText("Your Cart")
    //checkout button test
    await expect(cart.checkout_btn).toBeEnabled()
    await expect(cart.checkout_btn).toBeVisible()
    await (cart.checkout_btn).click()
    await expect(page).toHaveURL(/checkout-step-one/)
    //back to cart page
    await expect(await page.getByRole('link', { name: 'Cancel' })).toBeEnabled()
    await page.getByRole('link', { name: 'Cancel' }).click()
    await expect(page).toHaveURL(/cart/)
    //remove button count==cart item
    const count=await page.getByRole('button', { name: 'Remove' }).count()
    await expect(basepage.cart_count).toHaveText(String(count))


})
