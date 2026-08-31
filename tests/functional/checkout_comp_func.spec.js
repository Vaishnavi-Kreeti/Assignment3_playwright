import { LoginPage } from '../../pages/LoginPage';
import { BasePage } from '../../pages/BasePage';
import {Checkout_1} from '../../pages/Checkout_1';
import { Checkout_2 } from '../../pages/Checkout_2';
import { Cart } from '../../pages/Cart';
import { Checkout_comp } from '../../pages/Checkout_comp';
const { test, expect } = require('@playwright/test');


test.describe("Checkout_comp func Tests", () => {
    let basepage;
    let loginpage;
    let check_1;
    let cart;
    let check_2;
    let check_comp;
    test.beforeEach(async ({ page }) => {
        basepage = new BasePage(page);
        loginpage = new LoginPage(page);
        check_1=new Checkout_1(page);
        cart=new Cart(page);
        check_2=new Checkout_2(page);
        check_comp=new Checkout_comp(page);
        await page.goto(basepage.url);
        await loginpage.login("standard_user", "tta_secret");
        await basepage.cart.click();
        await cart.checkout_btn.click()
        await check_1.order("vaishnavi","shaw","711101")
        await check_2.finish_btn.click()
        await expect(page).toHaveURL(/checkout-complete/)
    });
    test("Verify Back button navigation", async ({ page }) => {
       await check_comp.back_btn.click()
       await expect(page).toHaveURL(/inventory/)
    });
   
});