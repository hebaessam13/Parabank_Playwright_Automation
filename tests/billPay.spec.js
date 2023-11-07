import { test, expect } from "../pages/PagesSetup";
import { loginData } from "../test-data/userData.json";
import "../Utils/registerationSetup";
import { billData } from "../test-data/billPayData.json";

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goTo();
  await loginPage.loginUserWith(loginData.username, loginData.password);
});
test.describe("AC-03", () => {
  for (let data of billData) {
    test(`Testing paying bill result to be ${data.expectedRequestMessage} `, async ({
      accountServicesPage,
      billPayPage,
    }) => {
      let accounts = await accountServicesPage.getAccountNumbersList();
      await billPayPage.goTo();
      await billPayPage.payBillwithInfo(
        data.name,
        data.address,
        data.state,
        data.city,
        data.zipCode,
        data.phone,
        data.payeeAccount,
        data.amount,
        accounts[data.fromAccount]
      );
      await expect.soft(
        await billPayPage.getBillPaymentrResult(),
        "Verifying bill payment results"
      ).toContainText(data.expectedRequestMessage);
      await expect(
        await accountServicesPage.getTotalAccountsBalance(),
        "Verifying remaining balance"
      ).toBe(data.expectedRemainingBalance);
    });
  }
});
