class LoginPage {

    constructor(page) {
        this.page = page

        this.username = page.getByPlaceholder("Username")
        this.password = page.getByPlaceholder("Password")
        this.loginButton = page.locator("#login-button")
        this.loginError = page.locator("#login-error")
    }

}

module.exports = { LoginPage }