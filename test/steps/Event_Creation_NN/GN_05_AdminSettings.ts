import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../util/hooks/pageFixture";

Given('the user is in the {string} page', async (expectedText) => {
    const actualText = await pageFixture.page.locator("//strong[text()='Administration']").textContent()
    expect(expectedText).toEqual(actualText);
});
When('the user clicks the "Event" tab',{timeout: 60 * 5000}, async () => {
    await pageFixture.page.locator("(//div[@class='menu-item']//i)[2]").click();
});
Then('the {string} page should be displayed',{timeout: 60 * 5000}, async (expectedText) => {
    const actualText = await pageFixture.page.locator("//strong[text()='Event']").textContent()
    expect(expectedText).toEqual(actualText);
});