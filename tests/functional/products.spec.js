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
    const sort_options = [
  { option: "Price (low to high)", value: "lohi" },
  { option: "Price (high to low)", value: "hilo" },
  { option: "Name (A to Z)", value: "az" },
  { option: "Name (Z to A)", value: "za" }
];
    // Select option
     for (const item of sort_options) {
    await dropdown.selectOption({ label: item.option });
    await expect(dropdown).toHaveValue(item.value);
  }
})
