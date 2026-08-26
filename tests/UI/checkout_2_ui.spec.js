import { LoginPage } from '../../pages/LoginPage';
import { BasePage } from '../../pages/BasePage';
import {Checkout_1} from '../../pages/Checkout_1';
import { Checkout_2 } from '../../pages/Checkout_2';
import { Cart } from '../../pages/Cart';
const { test, expect } = require('@playwright/test');


test.describe("Checkout_2 UI Tests", () => {
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

    test("Verify page heading", async ({ page }) => {
        await expect(check_2.heading).toHaveText("Checkout: Overview");
    });

    test("Verify Finish button", async ({ page }) => {
        await expect(check_2.finish_btn).toBeVisible();
        await expect(check_2.finish_btn).toBeEnabled();
        await expect(check_2.finish_btn).toHaveText("Finish");
    });
    test("Checkout card", async function ({ page }) {
        await expect(check_2.card).toBeVisible();
    });
    test("Verify Cancel button", async ({ page }) => {
        await expect(check_2.cancel_btn).toBeVisible();
        await expect(check_2.cancel_btn).toBeEnabled();
        await expect(check_2.cancel_btn).toHaveText("Cancel");
    });
});