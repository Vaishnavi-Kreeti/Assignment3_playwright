const products = require("../../pages/Products")
import { LoginPage } from '../../pages/LoginPage';
import { BasePage } from '../../pages/BasePage';
import { ProductsPage } from '../../pages/ProductsPage';

const {test,expect}=require('@playwright/test')

test('Test multi-select dropdown', async ({ page }) => {
    const loginpage=new LoginPage(page);
    const basepage=new BasePage(page)
    await page.goto(basepage.url);
    await loginpage.login("standard_user", "tta_secret")

    // const multiDropdown = page.locator('[data-test="product-sort-container"]')

    // // Pass an array of values, labels, or indices
    // await multiDropdown.selectOption(['Name (A to Z)', 'Name (Z to A)', 'Price (low to high)','Price (high to low)']);

    // // Assertion: Verify multiple values are accurately selected
    // await expect(multiDropdown).toHaveValues(['Name (A to Z)', 'Name (Z to A)', 'Price (low to high)','Price (high to low)']);
});

test("verify all products", async ({ page }) => {

    const loginPage = new LoginPage(page)
    const basepage=new BasePage(page)
    const productPage = new ProductsPage(page)
const products = Object.values(require("../../pages/Products"))
    await page.goto(basepage.url)

    await loginPage.login("standard_user", "tta_secret")

    for (const expectedProduct of products) {
        const product = productPage.getProduct(expectedProduct.name)

        await expect(product).toBeVisible()

        await expect(
            productPage.getProductName(expectedProduct.name)
        ).toHaveText(expectedProduct.name)

        await expect(
            productPage.getProductPrice(expectedProduct.name)
        ).toHaveText(expectedProduct.price)

        await expect(
            productPage.getAddToCartButton(expectedProduct.name)
        ).toBeVisible()
    }
})
