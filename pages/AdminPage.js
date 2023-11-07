import { expect } from "./PagesSetup";
export class AdminPage {
  constructor(page) {
    this.page = page;
    this.path = "admin.htm";
    this.cleanButton = page.locator("xpath=//button[@value='CLEAN']");
    this.intialBalance = page.getByTestId("initialBalance");
    this.submitButton = page.locator("xpath=//input[@value='Submit']");
    this.actionStatus = page.getByTestId("rightPanel");
  }
  async goTo() {
    await this.page.goto(this.path);
  }
  async enterIntialBalance(value) {
    await this.intialBalance.fill(value);
  }
  async submitChanges() {
    await this.submitButton.click();
  }
  async setInitialBalanceTo(value) {
    await this.intialBalance.fill(value);
    await this.submitButton.click();
    await expect(await this.actionStatus).toContainText(
      "Settings saved successfully."
    );
  }
  async cleanDatabase() {
    await this.cleanButton.click();
    await expect(await this.actionStatus).toContainText("Database Cleaned");
  }
}
