import { expect } from "./PagesSetup";
import { AccountServicesPage } from "./AccountServicesPage";
export class RegisterPage {
  constructor(page) {
    this.page = page;
    this.path = "register.htm";
    this.firstName = page.getByTestId("customer.firstName");
    this.lastName = page.getByTestId("customer.lastName");
    this.address = page.getByTestId("customer.address.street");
    this.city = page.getByTestId("customer.address.city");
    this.state = page.getByTestId("customer.address.state");
    this.zipCode = page.getByTestId("customer.address.zipCode");
    this.phone = page.getByTestId("customer.phoneNumber");
    this.ssn = page.getByTestId("customer.ssn");
    this.username = page.getByTestId("customer.username");
    this.password = page.getByTestId("customer.password");
    this.confirmPassword = page.getByTestId("repeatedPassword");
    this.welcomeMessage = page.locator("xpath=//h1[@class='title']");
    this.registerButton = page.locator("xpath=//input[@value='Register']");
  }
  async goTo() {
    await this.page.goto(this.path);
  }
  async clickRegister() {
    await this.registerButton.click();
  }
  async enterNewUserRegisterInfo(
    firstName,
    lastName,
    address,
    city,
    state,
    zipCode,
    phone,
    ssn,
    username,
    password,
    confirmPassword
  ) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.address.fill(address);
    await this.city.fill(city);
    await this.state.fill(state);
    await this.zipCode.fill(zipCode);
    await this.phone.fill(phone);
    await this.ssn.fill(ssn);
    await this.username.fill(username);
    await this.password.fill(password);
    await this.confirmPassword.fill(confirmPassword);
  }
  async registerUserWithInfo(
    firstName,
    lastName,
    address,
    city,
    state,
    zipCode,
    phone,
    ssn,
    username,
    password,
    confirmPassword
  ) {
    await this.enterNewUserRegisterInfo(
      firstName,
      lastName,
      address,
      city,
      state,
      zipCode,
      phone,
      ssn,
      username,
      password,
      confirmPassword
    );
    await this.clickRegister();
    await expect(
      await this.welcomeMessage,
      "validating successful registering"
    ).toHaveText(`Welcome ${username}`);
    return new AccountServicesPage(this.page);
  }
}
