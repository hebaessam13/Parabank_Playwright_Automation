import { OpenNewAccountPage } from "../pages/open-new-accountPage";
import { AccountServicesPage } from "../pages/account-services-page";
import { newAccountsData } from "../test-data/transfer-data.json";
import { expect } from "../pages/pages-setup";
import { AdminPage } from "../pages/admin-page";

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
