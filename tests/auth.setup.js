const { test: setup, expect } = require('@playwright/test');

const { BasePage } = require('../pages/BasePage');
const { LoginPage } = require('../pages/LoginPage');

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {

    const basepage = new BasePage(page);
    const loginpage = new LoginPage(page);

    await page.goto(basepage.url, {
        waitUntil: 'domcontentloaded'
    });

    await loginpage.login(
        'standard_user',
        'tta_secret'
    );

    // Verify that login created the localStorage value
    // const username = await page.evaluate(() => {
    //     const value = localStorage.getItem('tta-cart-user');
    //     return JSON.parse(value);
    // });

    // console.log('Logged in user:', username);

    // expect(username).toBe('standard_user');

    // Save cookies + localStorage
    await page.context().storageState({
        path: authFile
    });
});