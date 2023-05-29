import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../util/hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)
Given('the {string} field is visible Hazard_screen',{ timeout:20000 }, async (expectedText) => { 
    const actualText = await pageFixture.page.locator("//label[text()='Hazard']").textContent()
    expect(expectedText).toEqual(actualText);    
})
When('the user enters {string} in the hazard field',{ timeout:20000 }, async (expectedText) => {  
    await pageFixture.page.locator("//label[text()='Hazard']/following-sibling::div").click() 
    await pageFixture.page.locator("(//div[@class='blazored-typeahead__controls']//input)[3]").click() 
    await pageFixture.page.locator("(//div[@class='blazored-typeahead__controls']//input)[3]").type(expectedText)
})
Then('{string} message will be displayed', { timeout:50000 }, async (expectedText) => { 
    const actualText = await pageFixture.page.locator("//div[@class='blazored-typeahead__results']//div[1]").textContent();
    expect(expectedText).toEqual(actualText!.trim());
    
    await pageFixture.page.locator("//strong[text()='Event']").click() 
})