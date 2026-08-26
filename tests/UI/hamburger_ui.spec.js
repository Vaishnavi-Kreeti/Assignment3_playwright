import { LoginPage } from '../../pages/LoginPage';
import { BasePage } from '../../pages/BasePage';
import { Hamburger } from '../../pages/Hamburger';
const { test, expect } = require('@playwright/test');

test.describe("Hamburger UI Tests", () => {

    let basepage;
    let loginpage;
    let hamburger;
    
    test.beforeEach(async ({ page }) => {
        basepage = new BasePage(page);
        loginpage = new LoginPage(page);
        hamburger = new Hamburger(page);

        await page.goto(basepage.url);
        await loginpage.login("standard_user", "tta_secret");
        await expect(page).toHaveURL(/inventory/);
        // Open hamburger menu before every test
        await basepage.hamburger.click();
        await expect(hamburger.flyout).toBeVisible();
    });

    test("verify All Items option", async ({ page }) => {
        await expect(hamburger.items).toBeVisible();
        await expect(hamburger.items).toBeEnabled();
        await expect(hamburger.items).toHaveText("All Items");
    });

    test("verify About option", async ({ page }) => {
        await expect(hamburger.about).toBeVisible();
        await expect(hamburger.about).toBeEnabled();
        await expect(hamburger.about).toHaveText("About");
    });

    test("verify Logout option", async ({ page }) => {
        await expect(hamburger.logout).toBeVisible();
        await expect(hamburger.logout).toBeEnabled();
        await expect(hamburger.logout).toHaveText("Logout");

    });

    test("verify Reset App State option", async ({ page }) => {
        await expect(hamburger.reset).toBeVisible();
        await expect(hamburger.reset).toBeEnabled();
        await expect(hamburger.reset).toHaveText("Reset App State");
    });
    test("verify Cross button", async ({ page }) => {
        await expect(hamburger.close_btn).toBeVisible();
        await expect(hamburger.close_btn).toBeEnabled();
    });
});