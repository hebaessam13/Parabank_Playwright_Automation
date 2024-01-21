import { test } from "../pages/PagesSetup";
import { cleanDataBase } from "../workflows/users";
import { setIntialBalance } from "../workflows/accounts";

test.beforeAll(async ({ browser }) => {
  const page = await browser.newPage();
  await setIntialBalance(page, "3500000");
  page.close();
});
test.afterAll(async ({ browser }) => {
  const page = await browser.newPage();
  await cleanDataBase(page);
  page.close();
});
