const {test,expect}=require('@playwright/test')
const base_url="https://app.thetestingacademy.com/playwright/ttacart/?utm_source=chatgpt.com"

test.beforeEach(async ({ page }) => {
    await page.goto(base_url)
    await expect(page).toHaveTitle("TTACart - Login");
    
});
//check login and logout using correct ceredentials
test("title and login test",async function ({page}){
    await page.getByPlaceholder("Username").type("standard_user")
    await page.locator("#password").type("tta_secret")
    await page.locator("#login-button").click()
    await expect(page).toHaveURL(/inventory/)
    await expect(page).toHaveTitle("TTACart - Products");
    await page.locator("path[d='M4 6h16M4 12h16M4 18h16']").click()
    await page.getByText("Logout").click()
})

/*check login using incorrect username*/
test("title and login test 2",async function ({page}){
    await page.getByPlaceholder("Username").type("problem")
    await page.locator("#password").type("tta_secret")
    await page.locator("#login-button").click()
    const error_mess=await page.locator("#login-error").textContent()
    console.log(error_mess)
    await expect(error_mess===("Epic sadface: Username and password do not match any user in this service")).toBeTruthy()
    
    
})
//check login using incorrect password
test("title and login test 3",async function ({page}){
    await page.getByPlaceholder("Username").type("standard_user")
    await page.locator("#password").type("ttsecret")
    await page.locator("#login-button").click()
    const error_mess=await page.locator("#login-error").textContent()
    await expect(error_mess===("Epic sadface: Username and password do not match any user in this service")).toBeTruthy()
    
    
})

test.afterEach(async ({ page }) => {
    await expect(page).toHaveTitle("TTACart - Login");
});