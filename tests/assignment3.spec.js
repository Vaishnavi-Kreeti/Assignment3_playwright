import { LoginPage } from '../pages/LoginPage';
import{BasePage} from '../pages/BasePage';
const {test,expect}=require('@playwright/test')
const base_url="https://app.thetestingacademy.com/playwright/ttacart/?utm_source=chatgpt.com"


test.beforeEach(async ({ page }) => {
    const loginpage=new LoginPage(page);
    await page.goto(base_url)
    await expect(page).toHaveTitle("TTACart - Login");
    
});
//check login and logout using correct ceredentials
test("title and login test",async function ({page}){
    const loginpage=new LoginPage(page);
    const basepage=new BasePage(page);
    await loginpage.login("standard_user", "tta_secret")
    await expect(page).toHaveURL(/inventory/)
    await expect(page).toHaveTitle("TTACart - Products");
    await basepage.hamburger.click()
    await page.getByText("Logout").click()
})

/*check login using incorrect username*/
test("title and login test 2",async function ({page}){
    const loginpage=new LoginPage(page);
    await loginpage.login("problem", "tta_secret")
    const error_mess=await loginpage.loginError.textContent()
    await expect(error_mess===("Epic sadface: Username and password do not match any user in this service")).toBeTruthy()
    
    
})
//check login using incorrect password
test("title and login test 3",async function ({page}){
    const loginpage=new LoginPage(page);
    await loginpage.login("standard_user", "ttaecret")
    const error_mess=await loginpage.loginError.textContent()
    await expect(error_mess===("Epic sadface: Username and password do not match any user in this service")).toBeTruthy()
    
    
})

test.afterEach(async ({ page }) => {
    
    await expect(page).toHaveTitle("TTACart - Login");
});