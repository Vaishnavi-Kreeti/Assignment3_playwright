import { LoginPage } from '../../pages/LoginPage';
const {test,expect}=require('@playwright/test')
const base_url="https://app.thetestingacademy.com/playwright/ttacart/?utm_source=chatgpt.com"

test("login ui",async function ({page}){
    await page.goto(base_url)
    const loginpage=new LoginPage(page);
  

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