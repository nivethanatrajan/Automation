import { After, AfterAll, AfterStep, Before, BeforeStep, BeforeAll, Status } from "@cucumber/cucumber";
import { chromium, Browser, Page, BrowserContext } from "@playwright/test";
import { pageFixture } from './pageFixture'

let browser: Browser;
let context: BrowserContext;
let page: Page;


BeforeAll({ timeout: 100 * 1000 }, async function () {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await browser.newPage();
  pageFixture.page = page;
  await pageFixture.page.goto("https://goarn-uat.adapptlabs.com/kp")
})

// Before({ timeout: 60 * 1000 }, async function () {
// });

After(async function ({ pickle, result }) {
  if (result?.status == Status.FAILED) {
    const img = await pageFixture.page.screenshot({ path: `./report/test-results/screenshots/${pickle.name}.png`, type: "png" })
    await this.attach(img, "image/png");
  }
});

AfterAll(async function () {
  await pageFixture.page.close();
  await browser.close();
})