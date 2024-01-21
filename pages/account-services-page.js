import { expect } from "./pages-setup";
import { OpenNewAccountPage } from "./open-new-accountPage";
import { TransferFundsPage } from "./transfer-funds-page";
import { RequestLoanPage } from "./request-loan-page";
import { BillPayPage } from "./bill-pay-page";
export class AccountServicesPage {
  constructor(page) {
    this.path = "index.htm";
    this.page = page;
    this.logoutButton = page.getByRole("link", { name: "Log Out" });
    this.accountsOverviewButton = page.getByRole("link", {
      name: "Accounts Overview",
    });
    this.openNewAccountButton = page.getByRole("link", {
      name: "Open New Account",
    });
    this.transferFundsButton = page.getByRole("link", {
      name: "Transfer Funds",
    });
    this.billPayButton = page.getByRole("link", { name: "Bill Pay" });
    this.requestLoanButton = page.getByRole("link", { name: "Request Loan" });
    this.accountStatus = page.getByTestId("leftPanel").getByRole("heading");
    this.accounts = page.locator("xpath=//*[@Id='accountTable']//a");
    this.accountsTable = page.getByTestId("accountTable");
    this.accountsBalances = page.locator(
      "xpath=//*[@Id='accountTable']//td[2]"
    );
    this.accountsTableFirstRow = page.locator(
      "xpath=(//*[@Id='accountTable']//tr)[2]"
    );
  }
  static get(page) {
    return new AccountServicesPage(page);
  }
  async goTo() {
    await this.page.goto(this.path);
  }
  async showAccountOverview() {
    await this.accountsOverviewButton.click();
  }
  async goToTransferFunds() {
    await this.transferFundsButton.click();
    return new TransferFundsPage(this.page);
  }
  async goToBillPay() {
    await this.billPayButton.click();
    return new BillPayPage(this.page);
  }
  async goToRequestLoan() {
    await this.requestLoanButton.click();
    return new RequestLoanPage(this.page);
  }
  async goToOpenNewAccount() {
    await this.openNewAccountButton.click();
    return new OpenNewAccountPage(this.page);
  }
  async logout() {
    this.logoutButton.click();
    await expect(await this.accountStatus).toHaveText("Customer Login");
  }
  async getAccountNumbersList() {
    await this.showAccountOverview();
    await expect(await this.accountsTableFirstRow).toContainText("$");
    return await this.accounts.allInnerTexts();
  }
  async getAccountBalanceFor(accountNo) {
    const accounts = await this.getAccountNumbersList();
    const index = await accounts.indexOf(accountNo);
    const balances = await this.accountsBalances.allInnerTexts();
    return await balances[index];
  }
  async getTotalAccountsBalance() {
    await this.showAccountOverview();
    await expect(await this.accountsTableFirstRow).toContainText("$");
    const balances = await this.accountsBalances.all();
    return await balances[balances.length - 1].textContent();
  }
}
