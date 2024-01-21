import { AdminPage } from "../pages/AdminPage";
import { RegisterPage } from "../pages/RegisterPage";
import { getTestUser } from "../utils/dataHelper";

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
