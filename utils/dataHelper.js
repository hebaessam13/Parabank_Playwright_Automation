import { userDataTemplate } from "../test-data/userData.json";
import Randomstring from "randomstring";
export async function getTestUser() {
  const testUser = JSON.parse(JSON.stringify( userDataTemplate));
  let username = Randomstring.generate(7);
  let password = Randomstring.generate(7);
  testUser.registerData.firstName = Randomstring.generate({
    length: 5,
    charset: "alphabetic",
  });
  testUser.registerData.lastName = Randomstring.generate({
    length: 5,
    charset: "alphabetic",
  });
  testUser.registerData.address = Randomstring.generate({
    length: 20,
    charset: ["alphabetic", " "],
  });
  testUser.registerData.city = Randomstring.generate({
    length: 5,
    charset: "alphabetic",
  });
  testUser.registerData.state = Randomstring.generate({
    length: 5,
    charset: "alphabetic",
  });
  testUser.registerData.zipCode = Randomstring.generate({
    length: 5,
    charset: "numeric",
  });
  testUser.registerData.phone = Randomstring.generate({
    length: 12,
    charset: "numeric",
  });
  testUser.registerData.ssn = Randomstring.generate({
    length: 9,
    charset: "numeric",
  });
  testUser.registerData.username = username;
  testUser.registerData.password = password;
  testUser.registerData.confirmPassword = password
  testUser.loginData.username = username;
  testUser.loginData.password = password
  return testUser;
}
