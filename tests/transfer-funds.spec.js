import { test, expect } from "../pages/pages-setup";
import "../utils/registeration-setup";
import testData from "../test-data/transfer-data.json";
import { registerWithRandomUser } from "../workflows/users";
import { openMultipleAccountForUser } from "../workflows/accounts";

test.beforeEach(async ({ page }) => {
  await registerWithRandomUser(page);
  await openMultipleAccountForUser(page, 2);
});
test.describe("AC-01", () => {
  for (let transferTestCase of testData.transferData) {
    test(`Testing Transfering result to be ${transferTestCase.expectedMessage}`, async ({
      accountServicesPage,
      transferFundsPage,
    }) => {
      let accounts, totalBalance;
      accounts = await accountServicesPage.getAccountNumbersList();
      totalBalance = await accountServicesPage.getTotalAccountsBalance();
      transferFundsPage.goTo();
      await transferFundsPage.transferFunds(
        accounts[transferTestCase.from],
        accounts[transferTestCase.to],
        transferTestCase.amount
      );
      expect
        .soft(accounts, "Verfiying No. of Accounts")
        .toHaveLength(testData.expectedNoOfAccounts);
      expect
        .soft(totalBalance, "Verfiying total balance for accounts")
        .toBe(testData.expectedTotalBalance);
      await expect(
        await transferFundsPage.getTransferError(),
        "Verifying transfer results"
      ).toContainText(transferTestCase.expectedMessage);
    });
  }
});
