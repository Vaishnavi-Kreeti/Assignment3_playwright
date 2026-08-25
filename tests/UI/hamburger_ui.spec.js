import { LoginPage } from '../../pages/LoginPage';
import { BasePage } from '../../pages/BasePage';
import { ProductsPage } from '../../pages/ProductsPage';
import { Cart } from '../../pages/Cart';
import { Hamburger } from '../../pages/Hamburger';
const {test,expect}=require('@playwright/test')


test("hamburger ui",async function ({page}){
    const basepage=new BasePage(page);
    const loginpage=new LoginPage(page);
    const hamburger=new Hamburger(page);

    await page.goto(basepage.url)
    await loginpage.login("standard_user", "tta_secret")
    await expect(page).toHaveURL(/inventory/)
   //opening hamburger flyout
    await basepage.hamburger.click()
    await expect(hamburger.flyout).toBeVisible()
    //testing different options
    await expect(hamburger.items).toBeVisible()
    await expect(hamburger.items).toBeEnabled()
    await expect(hamburger.items).toHaveText('All Items')

    await expect(hamburger.about).toBeVisible()
    await expect(hamburger.about).toBeEnabled()
    await expect(hamburger.about).toHaveText('About')

    await expect(hamburger.logout).toBeVisible()
    await expect(hamburger.logout).toBeEnabled()
    await expect(hamburger.logout).toHaveText('Logout')

    await expect(hamburger.reset).toBeVisible()
    await expect(hamburger.reset).toBeEnabled()
    await expect(hamburger.reset).toHaveText('Reset App State')
});