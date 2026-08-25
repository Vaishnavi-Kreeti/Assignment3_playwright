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

    await page.goto(basepage.url)
    await loginpage.login("standard_user", "tta_secret")
    await expect(page).toHaveURL(/inventory/)
   //opening hamburger flyout
   await expect(hamburger.flyout).toBeVisible()
    await basepage.hamburger.click()
    await expect(hamburger.flyout).toBeVisible()
    
    //
    await hamburger.items.click()
    await expect(hamburger.reset).toBeVisible()
    await expect(hamburger.flyout).toBeVisible()
});