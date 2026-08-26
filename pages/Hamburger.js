class Hamburger{
    constructor(page){
        this.page=page;
        this.flyout= page.locator('[data-test="side-menu"]');
        this.items=page.getByRole('link', { name: 'All Items' });
        this.about=page.getByRole('link', { name: 'About' });
        this.logout=page.getByRole('link', { name: 'Logout' });
        this.reset=page.getByRole('link', { name: 'Reset App State' });
        this.close_btn=page.getByRole('button', { name: 'Close menu' });
    }
}
module.exports={Hamburger}