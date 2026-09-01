// import { LoginPage } from '../pages/LoginPage';
// import{BasePage} from '../pages/BasePage';
// const {test,expect}=require('@playwright/test')
// //const authFile = 'tests/auth.setup.js';

// test.describe("valid and invalid login",()=>{
//  let loginpage;
//  let basepage;
// test.beforeEach(async ({ page }) => {
//    loginpage=new LoginPage(page);
//  basepage=new BasePage(page);
//     await page.goto(basepage.url)
//     await expect(page).toHaveTitle("TTACart - Login");
// });
// //check login using correct ceredentials
// test("title and login test",async function ({page}){
   
//     await loginpage.login("standard_user", "tta_secret")
//     await expect(page).toHaveURL(/inventory/)
//     await expect(page).toHaveTitle("TTACart - Products");
   
// })

// /*check login using incorrect username*/
// test("title and login test 2",async function ({page}){
//     await loginpage.login("problem", "tta_secret")
//     const error_mess=await loginpage.loginError.textContent()
//     await expect(error_mess===("Epic sadface: Username and password do not match any user in this service")).toBeTruthy()
//     await expect(page).toHaveTitle("TTACart - Login");
    
// })
// //check login using incorrect password
// test("title and login test 3",async function ({page}){
//     await loginpage.login("standard_user", "ttaecret")
//     const error_mess=await loginpage.loginError.textContent()
//     await expect(error_mess===("Epic sadface: Username and password do not match any user in this service")).toBeTruthy()
//     await expect(page).toHaveTitle("TTACart - Login");
// })

// });