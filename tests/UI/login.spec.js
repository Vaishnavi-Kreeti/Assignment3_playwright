const {test,expect}=require('@playwright/test')
const base_url="https://app.thetestingacademy.com/playwright/ttacart/?utm_source=chatgpt.com"

test("login ui",async function ({page}){
    await page.goto(base_url)
    await expect(page.locator(".tta-brand-title")).toHaveText("TTACart")
    await expect(page.locator("#login-button")).toBeVisible()
    await expect(page.locator("#login-button")).toBeEnabled()
    await expect(page.locator("#login-button")).toHaveText("Login")
    await expect(page.getByPlaceholder("Username")).toBeEditable()
    await expect(page.locator("#password")).toBeEditable()
});