import { test } from "../pages/PagesSetup";
import { cleanDataBase, registerUser } from "../workflows/users";
import { setIntialBalance } from "../workflows/accounts";

test.beforeAll(async ({ browser }) => {
  const page = await browser.newPage();
  await setIntialBalance(page, "3500000");
  const accountServicesPage = await registerUser(page);
  await accountServicesPage.logout();
  page.close();
});
test.afterAll(async ({ browser }) => {
  const page = await browser.newPage();
  await cleanDataBase(page);
  page.close();
});
