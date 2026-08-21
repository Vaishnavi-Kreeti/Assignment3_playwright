const {test,expect}=require('@playwright/test')
const base_url="https://app.thetestingacademy.com/playwright/ttacart/?utm_source=chatgpt.com"

test.beforeEach(async ({ page }) => {
    await page.goto(base_url)
    await expect(page).toHaveTitle("TTACart - Login");
    
});

test("products ui",async function ({page}){
    await page.getByPlaceholder("Username").type("standard_user")
    await page.locator("#password").type("tta_secret")
    await page.locator("#login-button").click()
    await expect(page).toHaveURL(/inventory/)
    await expect(page).toHaveTitle("TTACart - Products");
    await expect(page.locator(".page-title")).toHaveText("Products")
    await expect(page.getByLabel("link","Shopping cart")).toBeEnabled()
    await page.locator("a[id='shopping_cart_container'] svg").click()
    await expect(page).toHaveTitle("TTACart - Your Cart")
    await page.locator(".btn-continue").click()
    await expect(page).toHaveURL(/inventory/)

    await page.locator("")
})