const base = require("@playwright/test");
import { RegisterPage } from "./RegisterPage";
import { AdminPage } from "./AdminPage";
import { LoginPage } from "./LoginPage";
import { AccountServicesPage } from "./accountServicesPage";
import { OpenNewAccountPage } from "./OpenNewAccountPage";
import { TransferFundsPage } from "./TransferFundsPage";
import { RequestLoanPage } from "./RequestLoanPage";
import { BillPayPage } from "./BillPayPage";

exports.test = base.test.extend({
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
exports.expect = base.expect;
