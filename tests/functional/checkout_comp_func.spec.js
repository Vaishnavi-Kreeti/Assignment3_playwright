import { BasePage } from '../../pages/BasePage';
import { Checkout_comp } from '../../pages/Checkout_comp';
const { test, expect } = require('@playwright/test');


test.describe("Checkout_comp func Tests", () => {
    let basepage;
    let check_comp;
    test.beforeEach(async ({ page }) => {
        basepage = new BasePage(page);
        check_comp=new Checkout_comp(page);
        await page.goto(basepage.url+"checkout-complete")
    });
    test("Verify Back button navigation", async ({ page }) => {
       await check_comp.back_btn.click()
       await expect(page).toHaveURL(/inventory/)
    });
   
});