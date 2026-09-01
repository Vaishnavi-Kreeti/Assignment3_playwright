import { BasePage } from '../../pages/BasePage';
import {Checkout_1} from '../../pages/Checkout_1';
const { test, expect } = require('@playwright/test');


test.describe("Checkout_1 Func Tests", () => {
    let basepage;
    let check_1;
    test.beforeEach(async ({ page }) => {
        basepage = new BasePage(page);
        check_1=new Checkout_1(page);
       await page.goto(basepage.url+"checkout-step-one")
    });

    test("Verify valid form fillup", async ({ page }) => {
        await check_1.order("vaishnavi","shaw","711101")
        await expect(page).toHaveURL(/checkout-step-two/)
    });

    test("Verify empty first_name field form fillup", async ({ page }) => {
        await check_1.order("","shaw","711101")
        await expect(page).not.toHaveURL(/checkout-step-two/)
        const error_message=await check_1.first_alert.textContent()
        await expect(error_message===("Error: First Name is required")).toBeTruthy()
    });

    test("Verify empty last_name field form fillup", async ({ page }) => {
        await check_1.order("vaishnavi","","711101")
        await expect(page).not.toHaveURL(/checkout-step-two/)
        const error_message=await check_1.last_alert.textContent()
        await expect(error_message===("Error: Last Name is required")).toBeTruthy()
    });

    test("Verify empty zip field form fillup", async ({ page }) => {
        await check_1.order("vaishnavi","shaw","")
        await expect(page).not.toHaveURL(/checkout-step-two/)
        const error_message=await check_1.zip_alert.textContent()
        await expect(error_message===("Error: Postal Code is required")).toBeTruthy()
    });
});