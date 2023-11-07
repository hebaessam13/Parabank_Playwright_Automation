import { test, expect } from "../pages/PagesSetup";
import { loginData } from "../test-data/userData.json";
import "../utils/registerationSetup";
import { loanData } from "../test-data/requestLoanData.json";

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goTo();
  await loginPage.loginUserWith(loginData.username, loginData.password);
});
test.describe("AC-02", () => {
  for (let data of loanData) {
    test(`Testing requesting loan result to be ${data.expectedRequestMessage} `, async ({
      accountServicesPage,
      requestLoanPage,
    }) => {
      let accounts = await accountServicesPage.getAccountNumbersList();
      requestLoanPage.goTo();
      await requestLoanPage.applyForLoan(
        data.loanAmount,
        data.downPayment,
        accounts[data.fromAccount]
      );
      await expect(
        await requestLoanPage.getLoanRequestMessage(),
        "Verifying loan request results"
      ).toContainText(data.expectedRequestMessage);
    });
  }
});
