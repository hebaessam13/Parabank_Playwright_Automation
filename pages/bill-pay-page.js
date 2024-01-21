export class BillPayPage {
  constructor(page) {
    this.page = page;
    this.path = "billpay.htm";
    this.payeeName = page.locator("xpath=//input[@name='payee.name']");
    this.address = page.locator("xpath=//input[@name='payee.address.street']");
    this.city = page.locator("xpath=//input[@name='payee.address.city']");
    this.state = page.locator("xpath=//input[@name='payee.address.state']");
    this.zipCode = page.locator("xpath=//input[@name='payee.address.zipCode']");
    this.phoneNo = page.locator("xpath=//input[@name='payee.phoneNumber']");
    this.accountNo = page.locator("xpath=//input[@name='payee.accountNumber']");
    this.accountNoConfirm = page.locator(
      "xpath=//input[@name='verifyAccount']"
    );
    this.amount = page.locator("xpath=//input[@name='amount']");
    this.fromAccountMenu = page.locator(
      "xpath=//select[@name='fromAccountId']"
    );
    this.payButton = page.locator("xpath=//input[@value='Send Payment']");
    this.billPaymentResult = page.locator("xpath=//div[@ng-show='showResult']");
    this.errorMessage = page.locator("xpath=//*[contains(@class,'error')]");
  }
  async goTo() {
    await this.page.goto(this.path);
  }
  async selectAccountToTransferFrom(accountNo) {
    await this.fromAccountMenu.selectOption(accountNo);
  }
  async enterPayeeData(name, address, state, city, zipCode, phone, account) {
    await this.payeeName.fill(name);
    await this.address.fill(address);
    await this.state.fill(state);
    await this.city.fill(city);
    await this.zipCode.fill(zipCode);
    await this.phoneNo.fill(phone);
    await this.accountNo.fill(account);
    await this.accountNoConfirm.fill(account);
  }
  async enterAmout(value) {
    await this.amount.fill(value);
  }
  async clickPay() {
    await this.payButton.click();
  }
  async payBillwithInfo(
    name,
    address,
    state,
    city,
    zipCode,
    phone,
    account,
    amount,
    fromAccount
  ) {
    await this.enterPayeeData(
      name,
      address,
      state,
      city,
      zipCode,
      phone,
      account
    );
    await this.enterAmout(amount);
    await this.selectAccountToTransferFrom(fromAccount);
    await this.clickPay();
  }
  async getBillPaymentrResult() {
    return await this.billPaymentResult;
  }
}
