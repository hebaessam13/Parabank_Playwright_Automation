import { test, expect } from "../pages/pages-setup";
import "../utils/registeration-setup";
import { billData } from "../test-data/bill-Payment-data.json";
import { registerWithRandomUser } from "../workflows/users";

test.beforeEach(async ({ page }) => {
  await registerWithRandomUser(page);
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
      await expect
        .soft(
          await billPayPage.getBillPaymentrResult(),
          "Verifying bill payment results"
        )
        .toContainText(data.expectedRequestMessage);
      await expect(
        await accountServicesPage.getTotalAccountsBalance(),
        "Verifying remaining balance"
      ).toBe(data.expectedRemainingBalance);
    });
  }
});
