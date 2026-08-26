import { LoginPage } from '../../pages/LoginPage';
import { BasePage } from '../../pages/BasePage';
import { ProductsPage } from '../../pages/ProductsPage';
import { Cart } from '../../pages/Cart';
import { Checkout_1 } from '../../pages/Checkout_1';
const { test, expect } = require('@playwright/test');

test.describe("Cart Tests", () => {
    let loginpage;
    let basepage;
    let productpage;
    let cart;
    let check_1;
    test.beforeEach(async ({ page }) => {
        loginpage = new LoginPage(page);
        basepage = new BasePage(page);
        productpage = new ProductsPage(page);
        check_1=new Checkout_1(page);
        cart = new Cart(page);
        await page.goto(basepage.url);
        await loginpage.login("standard_user", "tta_secret");
        await expect(page).toHaveURL(/inventory/);
        // Add products to cart
        await productpage.addtocart_button.first().click();
        await productpage.addtocart_button.first().click();
        // Navigate to cart
        await basepage.cart.click();
        await expect(page).toHaveURL(/cart/);
    });

    test("verify cart UI", async ({ page }) => {
        await expect(cart.heading).toBeVisible();
        await expect(cart.heading).toHaveText("Your Cart");
        const count = await cart.remove_btn.count();
        if (count === 0) {
            await expect(cart.empty_txt).toBeVisible();
            await expect(cart.empty_txt).toHaveText("Your cart is empty");
        } else {
            await expect(cart.empty_txt).toBeHidden();
        }
    });

    test("verify checkout button", async ({ page }) => {
        await expect(cart.checkout_btn).toBeEnabled();
        await expect(cart.checkout_btn).toBeVisible();
        await cart.checkout_btn.click();
        await expect(page).toHaveURL(/checkout-step-one/);
    });

    test("verify cancel checkout", async ({ page }) => {
        await cart.checkout_btn.click();
        await expect(page).toHaveURL(/checkout-step-one/);
        //const cancelButton = page.getByRole("link",{ name: "Cancel" });
        await expect(check_1.cancel_btn).toBeEnabled();
        await check_1.cancel_btn.click();
        await expect(page).toHaveURL(/cart/);
    });
    test("verify cart item count", async ({ page }) => {
        const count = await cart.remove_btn.count();
        await expect(basepage.cart_count).toHaveText(String(count));
    });

    test("verify remove item", async ({ page }) => {
        const countBefore = await cart.remove_btn.count();
        await cart.remove_btn.first().click();
        const countAfter = await cart.remove_btn.count();
        await expect(countAfter).toBeLessThan(countBefore);
    });

});
