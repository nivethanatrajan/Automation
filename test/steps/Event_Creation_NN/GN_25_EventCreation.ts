import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../util/hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2) 
Given('the {string} dropdown should be visible IHR_assessment', async (expectedText) => { 
    await pageFixture.page.locator("//label[text()='IHR assessment']").scrollIntoViewIfNeeded();
    const actualText = await pageFixture.page.locator("//label[text()='IHR assessment']").textContent()
    expect(expectedText).toEqual(actualText);
});
When('the user clicks the IHR assessment dropdown', async ( ) => {
    await pageFixture.page.locator("//label[text()='IHR assessment']/following-sibling::div").click() 
    
 });
When('the user enters {string}', async (expectedText) => {
    await pageFixture.page.locator("(//div[@class='rz-dropdown-filter-container']//input)[3]").type(expectedText)
    pageFixture.page.waitForTimeout(30000)
 });
Then('{string} should be displayed in the dropdown', async (expectedText) => { 
    const actualText = await pageFixture.page.locator("//li[@aria-label='Not applicable']").textContent()
    expect(expectedText).toEqual(actualText!.trim()); 
    
});