import { AdminPage } from "./admin-page";
export class SideMenuPage {
  constructor(page) {
    this.page = page;
    this.path = "index.htm";
    this.adminPage = page.getByRole("link", { name: "Admin Page" });
  }
  async goTo() {
    await this.page.goto(this.path);
  }
  async goToAdminPage() {
    await this.adminPage.click();
    return new AdminPage(this.page);
  }
}
