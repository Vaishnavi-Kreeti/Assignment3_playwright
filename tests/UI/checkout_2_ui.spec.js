import { BasePage } from '../../pages/BasePage';
import { Checkout_2 } from '../../pages/Checkout_2';
const { test, expect } = require('@playwright/test');


test.describe("Checkout_2 UI Tests", () => {
    let basepage;
    let check_2;
    test.beforeEach(async ({ page }) => {
        basepage = new BasePage(page);
        check_2=new Checkout_2(page);
        await page.goto(basepage.url+"checkout-step-two")
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