import { OpenNewAccountPage } from "../pages/OpenNewAccountPage";
import { AccountServicesPage } from "../pages/accountServicesPage";
import { newAccountsData } from "../test-data/transferData.json";
import { expect } from "../pages/PagesSetup";
import { AdminPage } from "../pages/AdminPage";

export async function openMultipleAccountForUser(page, num) {
  const accountServicesPage = new AccountServicesPage(page);
  const openNewAccountPage = new OpenNewAccountPage(page);
  let accounts = await accountServicesPage.getAccountNumbersList();
  for (let index = 0; index < num; index++) {
    await openNewAccountPage.goTo();
    await openNewAccountPage.openNewAccountWith(
      newAccountsData[index].type,
      accounts[newAccountsData[index].fromAccountIndex]
    );
    accounts = await accountServicesPage.getAccountNumbersList();
  }
  await expect(accounts).toHaveLength(num + 1);
}

export async function setIntialBalance(page, amount) {
  const admin = new AdminPage(page);
  await admin.goTo();
  await admin.setInitialBalanceTo(amount);
}
