import { LoginPage } from '../../pages/LoginPage';
import { BasePage } from '../../pages/BasePage';
import {Checkout_1} from '../../pages/Checkout_1';
import { Cart } from '../../pages/Cart';
import { Checkout_2 } from '../../pages/Checkout_2';
const { test, expect } = require('@playwright/test');


test.describe("Checkout_2 Func Tests", () => {
    let basepage;
    let loginpage;
    let check_1;
    let cart;
    let check_2;
    test.beforeEach(async ({ page }) => {
        basepage = new BasePage(page);
        loginpage = new LoginPage(page);
        check_1=new Checkout_1(page);
        cart=new Cart(page);
        check_2=new Checkout_2(page);
        await page.goto(basepage.url);
        await loginpage.login("standard_user", "tta_secret");
        await basepage.cart.click();
        await cart.checkout_btn.click()
        await check_1.order("vaishnavi","shaw","711101")
        await expect(page).toHaveURL(/checkout-step-two/)
    });

    test("Verify Cancel button works", async ({ page }) => {
        await check_2.cancel_btn.click()
        await expect(page).toHaveURL(/cart/)
    });
    test("Verify Finish button works", async ({ page }) => {
        await check_2.finish_btn.click()
        await expect(page).toHaveURL(/checkout-complete/)
    });
  
});