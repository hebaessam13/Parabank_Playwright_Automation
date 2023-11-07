import { AdminPage } from "../pages/AdminPage";
import { RegisterPage } from "../pages/RegisterPage";
import { registerData } from "../test-data/userData.json";

export async function registerUser(page) {
  const register = new RegisterPage(page);
  await register.goTo();
  return await register.registerUserWithInfo(
    registerData.firstName,
    registerData.lastName,
    registerData.address,
    registerData.city,
    registerData.state,
    registerData.zipCode,
    registerData.phone,
    registerData.ssn,
    registerData.username,
    registerData.password,
    registerData.confirmPassword
  );
}

export async function cleanDataBase(page){
  const admin = new AdminPage(page);
  await admin.goTo();
  await admin.cleanDatabase();
}
