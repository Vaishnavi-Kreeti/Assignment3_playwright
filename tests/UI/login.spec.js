import { LoginPage } from '../../pages/LoginPage';
import { BasePage } from '../../pages/BasePage';
const {test,expect}=require('@playwright/test')


test("login ui",async function ({page}){
    const basepage=new BasePage(page);
    const loginpage=new LoginPage(page);
    await page.goto(basepage.url)
  
    await expect(page.locator(".tta-brand-title")).toHaveText("TTACart")

    await expect(loginpage.button).toBeVisible()
    await expect(loginpage.button).toBeEnabled()
    await expect(loginpage.button).toHaveText("Login")

    await expect(loginpage.username).toBeEditable()
    await expect(loginpage.username).toHaveAttribute("placeholder","Username")

    await expect(loginpage.password).toBeEditable()
    await expect(loginpage.password).toHaveAttribute("placeholder","Password")
    await expect(loginpage.password).toHaveAttribute("type","password")

    await expect(page.locator(".login-card")).toBeVisible()
});