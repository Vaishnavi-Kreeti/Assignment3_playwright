import { LoginPage } from '../../pages/LoginPage';
import { BasePage } from '../../pages/BasePage';
import {Checkout_1} from '../../pages/Checkout_1';
import { Cart } from '../../pages/Cart';
const { test, expect } = require('@playwright/test');


test.describe("Checkout_1 UI Tests", () => {
    let basepage;
    let loginpage;
    let check_1;
    let cart;
    test.beforeEach(async ({ page }) => {
        basepage = new BasePage(page);
        loginpage = new LoginPage(page);
        check_1=new Checkout_1(page);
        cart=new Cart(page);
        await page.goto(basepage.url);
        await loginpage.login("standard_user", "tta_secret");
        await basepage.cart.click();
        await cart.checkout_btn.click()
        await expect(page).toHaveURL(/checkout-step-one/)
    });

    test("Verify page heading", async ({ page }) => {
        await expect(check_1.heading).toHaveText("Checkout: Your Information");
    });

    test("Verify Continue button", async ({ page }) => {
        await expect(check_1.continue_btn).toBeVisible();
        await expect(check_1.continue_btn).toBeEnabled();
        await expect(check_1.continue_btn).toHaveText("Continue");
    });

    test("Verify Firstname field", async ({ page }) => {
        await expect(check_1.first_name).toBeEditable();
        await expect(check_1.first_name).toHaveAttribute("placeholder", "First Name");
    });

    test("Verify Lastname field", async ({ page }) => {
        await expect(check_1.last_name).toBeEditable();
        await expect(check_1.last_name).toHaveAttribute("placeholder", "Last Name");
    });

    test("Verify Zip field", async ({ page }) => {
        await expect(check_1.zip).toBeEditable();
        await expect(check_1.zip).toHaveAttribute("placeholder", "Zip/Postal Code");
    });

    test("Checkout card", async function ({ page }) {
        await expect(check_1.card).toBeVisible();
    });
    test("Verify Cancel button", async ({ page }) => {
        await expect(check_1.cancel_btn).toBeVisible();
        await expect(check_1.cancel_btn).toBeEnabled();
        await expect(check_1.cancel_btn).toHaveText("Cancel");
    });
});