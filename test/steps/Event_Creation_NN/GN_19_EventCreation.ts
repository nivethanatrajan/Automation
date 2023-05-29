import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../util/hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)
Given('the {string} field is visible', async (expectedText) => {
    const actualText = await pageFixture.page.locator("//label[text()='Operation name']").textContent()
    expect(expectedText).toEqual(actualText);
});
When('the user enters {string}', async (expectedText) => {
    await pageFixture.page.locator("//label[text()='Operation name']/following-sibling::div").click()
    await pageFixture.page.locator("(//label[text()='Operation name']/following::input)[1]").click()
    await pageFixture.page.locator("(//label[text()='Operation name']/following::input)[1]").type(expectedText)
});
Then('{string} should be displayed Operation_name', async (expectedText) => {
    const actualText = await pageFixture.page.locator("//div[@class='blazored-typeahead__results']//div[1]").textContent();
    expect(expectedText).toEqual(actualText!.trim());
    
    await pageFixture.page.locator("//strong[text()='Event']").click() 
});