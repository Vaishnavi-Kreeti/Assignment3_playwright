import { LoginPage } from '../../pages/LoginPage';
import { BasePage } from '../../pages/BasePage';

const { test, expect } = require('@playwright/test');


test.describe("Login UI Tests", () => {
    let basepage;
    let loginpage;
    test.beforeEach(async ({ page }) => {
        basepage = new BasePage(page);
        loginpage = new LoginPage(page);
        await page.goto(basepage.url);
    });

    test("Verify application title", async ({ page }) => {
        await expect(loginpage.title).toHaveText("TTACart");
    });

    test("Verify Login button", async ({ page }) => {
        await expect(loginpage.button).toBeVisible();
        await expect(loginpage.button).toBeEnabled();
        await expect(loginpage.button).toHaveText("Login");
    });

    test("Verify Username field", async ({ page }) => {
        await expect(loginpage.username).toBeEditable();
        await expect(loginpage.username).toHaveAttribute("placeholder", "Username");
    });

    test("Verify Password field", async ({ page }) => {
        await expect(loginpage.password).toBeEditable();
        await expect(loginpage.password).toHaveAttribute("placeholder", "Password");
        await expect(loginpage.password).toHaveAttribute("type", "password");
    });
    test("Login card", async function ({ page }) {
        await expect(loginpage.card).toBeVisible();
    });
});