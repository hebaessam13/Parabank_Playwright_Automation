import { test, expect } from "../pages/PagesSetup";
import "../utils/registerationSetup";
import { loanData } from "../test-data/requestLoanData.json";
import { registerWithRandomUser } from "../workflows/users";

test.beforeEach(async ({ page }) => {
  await registerWithRandomUser(page);
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
