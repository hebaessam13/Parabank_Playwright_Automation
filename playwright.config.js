import { defineConfig, devices } from "@playwright/test";

module.exports = defineConfig({
  testDir: "./tests",
  outputDir: "./test-results",
  reporter: [["html", { open: "never" }]],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : 2,
  use: {
    baseURL: "https://parabank.parasoft.com/",
    trace: "on-first-retry",
    testIdAttribute: "id",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },
  ],
});
