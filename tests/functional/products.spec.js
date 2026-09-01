const products = require("../../pages/Products")
import { BasePage } from '../../pages/BasePage';
import { ProductsPage } from '../../pages/ProductsPage';

const {test,expect}=require('@playwright/test')

test("verify product sorting dropdown", async ({ page }) => {

    const basepage=new BasePage(page)
    const productspage=new ProductsPage(page);
   await page.goto(basepage.url+"inventory")
  
    await expect(productspage.dropdown).toBeVisible()
    await expect(productspage.dropdown).toBeEnabled()
    const sort_options = [
  { option: "Price (low to high)", value: "lohi" },
  { option: "Price (high to low)", value: "hilo" },
  { option: "Name (A to Z)", value: "az" },
  { option: "Name (Z to A)", value: "za" }
];
    // Select option
    for (const item of sort_options) {
    await productspage.dropdown.selectOption({ label: item.option });
    await expect(productspage.dropdown).toHaveValue(item.value);
  }
})
