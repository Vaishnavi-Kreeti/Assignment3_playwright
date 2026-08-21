import { LoginPage } from '../../pages/LoginPage';
const {test,expect}=require('@playwright/test')
const base_url="https://app.thetestingacademy.com/playwright/ttacart/?utm_source=chatgpt.com"

test("login ui",async function ({page}){
    await page.goto(base_url)

    const button= page.locator("#login-button")
    const name= page.getByPlaceholder("Username")
    const pw= page.getByPlaceholder("Password")

    await expect(page.locator(".tta-brand-title")).toHaveText("TTACart")

    await expect(button).toBeVisible()
    await expect(button).toBeEnabled()
    await expect(button).toHaveText("Login")

    await expect(name).toBeEditable()
    await expect(name).toHaveAttribute("placeholder","Username")

    await expect(pw).toBeEditable()
    await expect(pw).toHaveAttribute("placeholder","Password")
    await expect(pw).toHaveAttribute("type","password")

    await expect(page.locator(".login-card")).toBeVisible()
});