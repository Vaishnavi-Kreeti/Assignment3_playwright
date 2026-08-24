const products = require("../../pages/Products")
import { LoginPage } from '../../pages/LoginPage';
import { BasePage } from '../../pages/BasePage';
import { ProductsPage } from '../../pages/ProductsPage';

const {test,expect}=require('@playwright/test')

test("verify product sorting dropdown", async ({ page }) => {

    const loginpage=new LoginPage(page);
    const basepage=new BasePage(page)
    await page.goto(basepage.url);
    await loginpage.login("standard_user", "tta_secret")
    const dropdown =await page.getByRole('combobox', { name: 'Sort products' })

    await expect(dropdown).toBeVisible()
    await expect(dropdown).toBeEnabled()

    // Select option
    await dropdown.selectOption({
        label: "Price (low to high)"
    })

    // Verify selected option
    await expect(dropdown)
        .toHaveValue("lohi")
})
