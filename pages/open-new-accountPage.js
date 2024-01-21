import { expect } from "./pages-setup";
export class OpenNewAccountPage {
  constructor(page) {
    this.page = page;
    this.path = "openaccount.htm";
    this.accountTypeMenu = page.getByTestId("type");
    this.fromAccountMenu = page.getByTestId("fromAccountId");
    this.submitButton = page.locator(
      "xpath=//input[@value='Open New Account']"
    );
    this.actionStatus = page.getByTestId("rightPanel");
  }
  async goTo() {
    await this.page.goto(this.path);
  }
  async selectAccountType(type) {
    switch (type) {
      case "saving":
        await this.accountTypeMenu.selectOption("1");
        break;
      case "checking":
        await this.accountTypeMenu.selectOption("0");
        break;
      default:
        throw new error("account type should be either saving or checking");
    }
  }
  async selectAccountNumber(accountNo) {
    await this.fromAccountMenu.selectOption(accountNo);
  }
  async clickOpenNewAccount() {
    await this.submitButton.click();
  }
  async openNewAccountWith(type, fromAccount) {
    await this.selectAccountType(type);
    await this.selectAccountNumber(fromAccount);
    await this.clickOpenNewAccount();
    await expect(await this.actionStatus).toContainText(
      "Your new account number:"
    );
  }
}
