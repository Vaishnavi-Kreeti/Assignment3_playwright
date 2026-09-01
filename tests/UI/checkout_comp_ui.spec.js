import { BasePage } from '../../pages/BasePage';
import { Checkout_comp } from '../../pages/Checkout_comp';
const { test, expect } = require('@playwright/test');


test.describe("Checkout_comp UI Tests", () => {
    let basepage;
    let check_comp;
    test.beforeEach(async ({ page }) => {
        basepage=new BasePage(page);
        check_comp=new Checkout_comp(page);
        await page.goto(basepage.url+"checkout-complete")
    });

    test("Verify page heading", async ({ page }) => {
        await expect(check_comp.heading).toHaveText("Checkout: Complete!");
    });

    test("Verify Back button", async ({ page }) => {
        await expect(check_comp.back_btn).toBeVisible();
        await expect(check_comp.back_btn).toBeEnabled();
        await expect(check_comp.back_btn).toHaveText("Back Home");
    });
    test("Checkout_comp card", async function ({ page }) {
        await expect(check_comp.card).toBeVisible();
    });
   
});