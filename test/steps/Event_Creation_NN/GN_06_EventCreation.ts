import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../util/hooks/pageFixture";

setDefaultTimeout(90 * 5000 * 2)
Given('the user is on {string} page', async (expectedText) => {
     const actualText = await pageFixture.page.locator("//strong[text()='Event']").textContent() 
     expect(expectedText).toEqual(actualText);
});
Then('the event ID field is empty', async () => {
    const eventEmpty = await pageFixture.page.locator("(//label[text()='Event ID']/following::input)[1]").inputValue();
    expect(eventEmpty).toBe('')
});
Then('the save button at the bottom is disabled', async () => {
  expect(pageFixture.page.locator("//button[text()='Save']").isDisabled());
});