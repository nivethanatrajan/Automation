import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../util/hooks/pageFixture";

Given('the {string} field should be visible Country_territory', { timeout: 120000 },async (expectedText) => {
    const actualText = await pageFixture.page.locator("//label[text()='Country & territory']").textContent()
    expect(expectedText).toEqual(actualText);
})

When('the user enters {string} in the country and territory field', async (expectedText) => {
    await pageFixture.page.locator("(//div[@class='blazored-typeahead__input-mask'])[1]").click()
    await pageFixture.page.locator("(//div[@class='blazored-typeahead__controls']//input)[1]").click()
    await pageFixture.page.locator("(//div[@class='blazored-typeahead__controls']//input)[1]").type(expectedText)
})

Then('{string} message should be displayed in the suggestion field', async (expectedText) => {
    const actualText = await pageFixture.page.locator("//div[@class='blazored-typeahead__results']//div[1]").textContent();
    expect(expectedText).toEqual(actualText!.trim());

    await pageFixture.page.locator("//strong[text()='Event']").click() 
})