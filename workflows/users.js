import { AdminPage } from "../pages/admin-page";
import { RegisterPage } from "../pages/register-page";
import { getTestUser } from "../utils/data-helper";

export async function registerWithRandomUser(page) {
  const register = new RegisterPage(page);
  const testUser = await getTestUser();
  await register.goTo();
  return await register.registerUserWithInfo(
    testUser.registerData.firstName,
    testUser.registerData.lastName,
    testUser.registerData.address,
    testUser.registerData.city,
    testUser.registerData.state,
    testUser.registerData.zipCode,
    testUser.registerData.phone,
    testUser.registerData.ssn,
    testUser.registerData.username,
    testUser.registerData.password,
    testUser.registerData.confirmPassword
  );
}

export async function cleanDataBase(page) {
  const admin = new AdminPage(page);
  await admin.goTo();
  await admin.cleanDatabase();
}
