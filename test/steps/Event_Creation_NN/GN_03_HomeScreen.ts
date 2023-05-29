import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import {expect } from "@playwright/test";
import { pageFixture } from "../../../util/hooks/pageFixture";


setDefaultTimeout(60 * 1000);
Given('the user is in the {string} homepage', async (expectedText ) => {  
 
    await pageFixture.page.locator("(//label[text()='Username or e-mail address']/following::input)[1]").type("superadmin")
    await pageFixture.page.locator("//input[@type='password']").type("tWzmCHF1$9!k")
    await pageFixture.page.locator("(//button[@type='submit'])[1]").click();

    const actualText = await pageFixture.page.locator("//h5[text()[normalize-space()='Announcements']]").textContent()
    expect(expectedText).toEqual(actualText!.trim());
    
});

When('the user opens the hamburger menu', async () => {
  await pageFixture.page.locator("(//input[@type='checkbox'])[1]").click();
});

Then('the {string} is visible', async (expectedText) => {
    const actualText = await pageFixture.page.locator("//span[text()='Admin settings']").textContent()
    expect(expectedText).toEqual(actualText); 
});