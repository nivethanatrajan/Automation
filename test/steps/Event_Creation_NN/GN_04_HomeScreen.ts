import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../util/hooks/pageFixture";

setDefaultTimeout(90 * 5000 * 2)
Given('the user has the hamburger menu opened', async () => {
    const actualText = await pageFixture.page.locator("//span[text()='Dashboard']").textContent()
    expect("Dashboard").toEqual(actualText);
});
When('the user opens the "Admin settings"', async () => {
    await pageFixture.page.locator("//span[text()='Admin settings']").click();
});
Then('the {string} page should be displayed test', async (expectedText) => {
    const actualText = await pageFixture.page.locator("//strong[text()='Administration']").textContent()
    expect(expectedText).toEqual(actualText);
});
Then('the {string} tab should be displayed Admin_settings', async (expectedText) => {
    const actualText = await pageFixture.page.locator("//a[text()[normalize-space()='Event']]").textContent()
     expect(expectedText).toEqual(actualText!.trim());
});