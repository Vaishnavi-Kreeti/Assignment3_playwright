import{BasePage} from '../pages/BasePage';

const { test, expect } = require('@playwright/test');

test('Verify saved login session', async ({ page }) => {
let basePage=new BasePage(page);
    await page.goto(basePage.url);

    const username = await page.evaluate(() => {
        const value = localStorage.getItem('tta-cart-user');
        return JSON.parse(value);
    });

    console.log('Saved user:', username);

    expect(username).toBe('standard_user');
});