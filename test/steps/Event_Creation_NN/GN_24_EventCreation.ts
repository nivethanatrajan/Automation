import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../util/hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)
Given('the "Verification status" dropdown is cleared', async () => {
//await pageFixture.page.locator("(//div[@class='rz-dropdown-filter-container']//input)[3]").clear();
    
});
When('the user clicks verification status dropdown', async () => {
    await pageFixture.page.locator("(//div[@class='rz-dropdown valid'])[2]").click() 
    pageFixture.page.waitForTimeout(30000)
});
When('the user selects {string}', async (expectedText) => {
    await pageFixture.page.locator("(//div[@class='rz-dropdown-filter-container']//input)[3]").type(expectedText)
    pageFixture.page.waitForTimeout(30000)
});
Then('{string} should be displayed in the field', async (expectedText) => {
    const actualText = await pageFixture.page.locator("//li[@aria-label='Infomation Only']//span[1]").textContent()
    expect(expectedText).toEqual(actualText!.trim()); 
    pageFixture.page.waitForTimeout(30000)
});