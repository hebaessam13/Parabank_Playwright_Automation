import { test as baseTest } from "@playwright/test";
import { RegisterPage } from "./register-page";
import { AdminPage } from "./admin-page";
import { LoginPage } from "./login-page";
import { AccountServicesPage } from "./account-services-page";
import { OpenNewAccountPage } from "./open-new-accountPage";
import { TransferFundsPage } from "./transfer-funds-page";
import { RequestLoanPage } from "./request-loan-page";
import { BillPayPage } from "./bill-pay-page";

exports.test = baseTest.extend({
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  accountServicesPage: async ({ page }, use) => {
    await use(new AccountServicesPage(page));
  },
  openNewAccountPage: async ({ page }, use) => {
    await use(new OpenNewAccountPage(page));
  },
  transferFundsPage: async ({ page }, use) => {
    await use(new TransferFundsPage(page));
  },
  adminPage: async ({ page }, use) => {
    await use(new AdminPage(page));
  },
  requestLoanPage: async ({ page }, use) => {
    await use(new RequestLoanPage(page));
  },
  billPayPage: async ({ page }, use) => {
    await use(new BillPayPage(page));
  },
});
exports.expect = baseTest.expect;
