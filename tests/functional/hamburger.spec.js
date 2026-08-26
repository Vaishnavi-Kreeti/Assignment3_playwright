import { LoginPage } from '../../pages/LoginPage';
import { BasePage } from '../../pages/BasePage';
import { ProductsPage } from '../../pages/ProductsPage';
import { Cart } from '../../pages/Cart';
import { Hamburger } from '../../pages/Hamburger';
const {test,expect}=require('@playwright/test')

test.describe("Hamburger Menu Tests", () => {

    let basepage;
    let loginpage;
    let hamburger;
    let cart;

    test.beforeEach(async ({ page }) => {

        basepage = new BasePage(page);
        loginpage = new LoginPage(page);
        hamburger = new Hamburger(page);
        cart = new Cart(page);

        await page.goto(basepage.url);
        await loginpage.login("standard_user", "tta_secret");
        await expect(page).toHaveURL(/inventory/);
         await expect(hamburger.flyout).not.toHaveClass(/is-open/);
        await basepage.hamburger.click();
        await expect(hamburger.flyout).toHaveClass(/is-open/);
    });
    test("verify items option", async ({ page }) => {
        await hamburger.items.click();
        await expect(page).toHaveURL(/inventory/);
    });

    test("verify about option", async ({ page }) => {
        await hamburger.about.click();
        await expect(page).toHaveURL(/thetestingacademy/);
    });

    test("verify reset option", async ({ page }) => {
        await hamburger.reset.click();
        const c = await cart.remove_btn.count();
        await expect(c).toBe(0);
        await expect(basepage.cart_count).not.toBeVisible();
    });

    test("verify logout option", async ({ page }) => {
        await hamburger.logout.click();
        await expect(page).not.toHaveURL(/inventory/);
        await expect(page).toHaveTitle("TTACart - Login");
    });
      test("verify cross btn", async ({ page }) => {
        await hamburger.close_btn.click();
       await expect(hamburger.flyout).not.toHaveClass(/is-open/);
    });

});