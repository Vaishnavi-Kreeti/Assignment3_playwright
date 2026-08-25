import { LoginPage } from '../../pages/LoginPage';
import { BasePage } from '../../pages/BasePage';
import { ProductsPage } from '../../pages/ProductsPage';
import { Cart } from '../../pages/Cart';
import { Hamburger } from '../../pages/Hamburger';
const {test,expect}=require('@playwright/test')


test("hamburger",async function ({page}){
    const basepage=new BasePage(page);
    const loginpage=new LoginPage(page);
    const hamburger=new Hamburger(page);
    const cart=new Cart(page);

    await page.goto(basepage.url)
    await loginpage.login("standard_user", "tta_secret")
    await expect(page).toHaveURL(/inventory/)
    //opening hamburger flyout
    await expect(hamburger.flyout).not.toHaveClass(/is-open/)
    await basepage.hamburger.click()
    await expect(hamburger.flyout).toHaveClass(/is-open/)
   
    
    //ist option check
    await hamburger.items.click()
    await expect(hamburger.flyout).not.toHaveClass(/is-open/)
    await expect(page).toHaveURL(/inventory/)

    //2nd option check
    await basepage.hamburger.click()
    await hamburger.about.click()
    await expect(page).toHaveURL(/thetestingacademy/)

    //4th option check
    await page.goBack()
    await basepage.hamburger.click()
    await hamburger.reset.click()
    const c=await cart.remove_btn.count()
    await expect(c==0).toBeTruthy()
    await expect(basepage.cart_count).not.toBeVisible()
    await expect(hamburger.flyout).not.toHaveClass(/is-open/)

    //3rd option check
    await basepage.hamburger.click()
    await hamburger.logout.click()
    await expect(page).not.toHaveURL(/inventory/)
    await expect(page).toHaveTitle("TTACart - Login");
});