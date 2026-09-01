import { BasePage } from '../../pages/BasePage';
import { Checkout_2 } from '../../pages/Checkout_2';
const { test, expect } = require('@playwright/test');


test.describe("Checkout_2 Func Tests", () => {
    let basepage;
    let check_2;
    test.beforeEach(async ({ page }) => {
        basepage = new BasePage(page);
        check_2=new Checkout_2(page);
      await page.goto(basepage.url+"checkout-step-two")
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