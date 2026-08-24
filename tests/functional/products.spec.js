import { LoginPage } from '../../pages/LoginPage';
import { BasePage } from '../../pages/BasePage';
const {test,expect}=require('@playwright/test')
const base_url="https://app.thetestingacademy.com/playwright/ttacart/?utm_source=chatgpt.com"
test('Test multi-select dropdown', async ({ page }) => {
    await page.goto(base_url);
    const loginpage=new LoginPage(page);
    const basepage=new BasePage(page)
    await loginpage.login("standard_user", "tta_secret")

    // const multiDropdown = page.locator('[data-test="product-sort-container"]')

    // // Pass an array of values, labels, or indices
    // await multiDropdown.selectOption(['Name (A to Z)', 'Name (Z to A)', 'Price (low to high)','Price (high to low)']);

    // // Assertion: Verify multiple values are accurately selected
    // await expect(multiDropdown).toHaveValues(['Name (A to Z)', 'Name (Z to A)', 'Price (low to high)','Price (high to low)']);
});

test("verify all products", async ({ page }) => {

    const products = page.locator(".product-card")

    const count = await products.count()

    for (let i = 0; i < count; i++) {

        const product = products.nth(i)

        // Product should be visible
        await expect(product).toBeVisible()

        // Product name should be visible
        await expect(
            product.locator(".product-name")
        ).toBeVisible()

        // Price should be visible
        await expect(
            product.locator(".product-price")
        ).toBeVisible()

        // Add to cart should be visible
        await expect(
            product.getByRole("button", { name: /add to cart/i })
        ).toBeVisible()
    }
})
