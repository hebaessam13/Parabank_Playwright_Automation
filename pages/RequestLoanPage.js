export class RequestLoanPage {
  constructor(page) {
    this.page = page;
    this.path = "requestloan.htm";
    this.loanAmount = page.getByTestId("amount");
    this.downPayment = page.getByTestId("downPayment");
    this.fromAccountMenu = page.getByTestId("fromAccountId");
    this.applyButton = page.locator("xpath=//input[@value='Apply Now']");
    this.errorMessage = page.locator("xpath=//*[contains(@class,'error')]");
    this.loanResult=page.locator("xpath=//div[@ng-if='showResult']");
  }
  async goTo() {
    await this.page.goto(this.path);
  }
  async selectAccountToTransferFrom(accountNo) {
    await this.fromAccountMenu.selectOption(accountNo);
  }
  async clickApply() {
    await this.applyButton.click();
  }
  async enterLoanAmout(value) {
    await this.loanAmount.fill(value);
  }
  async enterdownpayment(value) {
    await this.downPayment.fill(value);
  }
  async applyForLoan(amount, downPayment, fromAccount) {
    await this.enterLoanAmout(amount);
    await this.enterdownpayment(downPayment);
    await this.selectAccountToTransferFrom(fromAccount);
    await this.clickApply();
  }
  async getLoanRequestErrorMessage() {
    return await this.errorMessage;
  }
  async getLoanRequestMessage(){
    return await this.loanResult;
  }
}
