import { LoginPage } from '../../pages/LoginPage';
import { BasePage } from '../../pages/BasePage';
import { ProductsPage } from '../../pages/ProductsPage';
import { Cart } from '../../pages/Cart';

const { test, expect } = require('@playwright/test');


test.describe("Products Tests", () => {
    let basepage;
    let loginpage;
    let productpage;
    let cartpage;

    test.beforeEach(async ({ page }) => {

        basepage = new BasePage(page);
        loginpage = new LoginPage(page);
        productpage = new ProductsPage(page);
        cartpage = new Cart(page);
        await page.goto(basepage.url);
        await loginpage.login("standard_user", "tta_secret");
        await expect(page).toHaveURL(/inventory/);
    });

    test("products ui", async ({ page }) => {
        await expect(page).toHaveTitle("TTACart - Products");
        await expect(productpage.title).toHaveText("Products");
        // Product card
    });

    test("product card",async({page})=>{
        await expect(productpage.card).toBeVisible();
        await expect(productpage.img).toBeVisible();
        await expect(productpage.name).toBeVisible();
        await expect(productpage.name).toBeEnabled();
        await expect(productpage.price).toBeVisible();
        await expect(productpage.addtocart_button).toBeVisible();
        await expect(productpage.addtocart_button).toBeEnabled();
    });

    test("verify cart navigation", async ({ page }) => {
        await expect(basepage.cart).toBeEnabled();
        await basepage.cart.click();
        await expect(page).toHaveTitle("TTACart - Your Cart");
        await cartpage.continue_btn.click();
        await expect(page).toHaveURL(/inventory/);
    });

    test("verify product details page", async ({ page }) => {
        await productpage.name.click();
        await expect(page).toHaveURL(/tta-junior-tester-onesie/);
        await expect(page.getByText('Product Details')).toBeVisible();
        await page.getByRole("button", { name: "Add to cart" }).click();
        await expect(page.getByRole("button", { name: "Remove" })).toHaveText("Remove");
        await page.getByRole("button", { name: "Back" }).click();
        await expect(page).toHaveURL(/inventory/);

    });
    test("verify cart item count", async ({ page }) => {
    const randnum = Math.floor(Math.random() * 5) + 1;
    for (let i = 1; i <= randnum; i++) {
            await productpage.addtocart_button.click();
        }
        const count = await productpage.remove_btn.count();
        await expect(basepage.cart_count).toHaveText(String(count));
    });
});