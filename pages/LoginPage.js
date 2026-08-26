class LoginPage {

    constructor(page) {
        this.page = page

        this.username = page.getByPlaceholder("Username")
        this.password = page.getByPlaceholder("Password")
        this.button = page.locator("#login-button")
        this.loginError = page.locator("#login-error")
        this.title=page.locator(".tta-brand-title")
        this.card=page.locator(".login-card")
    
    }
     async login(username, password) {

        await this.username.fill(username)
        await this.password.fill(password)
        await this.button.click()
    }

}

module.exports = { LoginPage }