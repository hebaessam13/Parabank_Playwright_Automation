import { expect } from "./PagesSetup";
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.path = "index.htm";
    this.username = page.locator("xpath=//input[@name='username']");
    this.password = page.locator("xpath=//input[@name='password']");
    this.loginButton = page.locator("xpath=//input[@value='Log In']");
    this.accountStatus = page.getByTestId("leftPanel").getByRole("heading");
  }
  async goTo() {
    await this.page.goto(this.path);
  }
  async enterUserCreds(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
  }
  async clickLogin() {
    await this.loginButton.click();
  }
  async loginUserWith(username, password) {
    await this.enterUserCreds(username, password);
    await this.clickLogin();
    await expect(
      await this.accountStatus,
      "validating successful login"
    ).toHaveText(`Account Services`);
  }
}
