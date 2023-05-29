import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../util/hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)
Given('the {string} field is visible Hazard1', async (expectedText) => {
    const actualText = await pageFixture.page.locator("//label[text()='Hazard']").textContent()
    expect(expectedText).toEqual(actualText);
})
When('the user has filled hazard as {string}', { timeout: 120000 }, async (expectedText) => {
    await pageFixture.page.locator("(//div[@class='blazored-typeahead__input-mask'])[3]").click()
    await pageFixture.page.locator("(//div[@class='blazored-typeahead__controls']//input)[3]").click()
    await pageFixture.page.locator("(//div[@class='blazored-typeahead__controls']//input)[3]").type(expectedText)
})
Then('the save button at the bottom should be disabled',{ timeout: 120000 }, async () => {
    expect(pageFixture.page.locator("//button[text()='Save']").isDisabled());
    await pageFixture.page.locator("//div[@class='col-md-12']//strong[1]").click()
})