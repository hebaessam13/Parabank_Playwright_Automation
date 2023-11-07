export class TransferFundsPage {
  constructor(page) {
    this.page = page;
    this.path = "transfer.htm";
    this.amount=page.getByTestId("amount");
    this.fromAccountMenu = page.getByTestId("fromAccountId");
    this.toAccountMenu = page.getByTestId("toAccountId");
    this.submitButton = page.locator("xpath=//input[@value='Transfer']");
    this.actionStatus = page.locator("//div[@ng-app='TransferApp']");
    this.errorMessage=page.locator("xpath=//*[contains(@class,'error')]");
  }
  async goTo() {
    await this.page.goto(this.path);
  }
  async selectAccountToTransferFrom(accountNo) {
    await this.fromAccountMenu.selectOption(accountNo);
  }
  async selectAccountToTransferTo(accountNo) {
    await this.toAccountMenu.selectOption(accountNo);
  }
  async clickTransfer() {
    await this.submitButton.click();
  }
  async enterAmout(value){
    await this.amount.fill(value);
  }
  async transferFunds(fromAccount,toAccount,amount) {
    await this.selectAccountToTransferFrom(fromAccount);
    await this.selectAccountToTransferTo(toAccount);
    await this.enterAmout(amount);
    await this.clickTransfer();
  }
  async getTransferResult(){
    return await this.actionStatus;
  }
  async getTransferError(){
    return await this.errorMessage;
  }
}
