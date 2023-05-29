import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../util/hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2) 
Given('the IHR assessment dropdown is visible', async (expectedText) => {
    
 });
When('the user clicks IHR assessment dropdown', async (expectedText) => { });
When('the user selects "not applicable"', async (expectedText) => { });
Then('not applicable should be displayed in the field', async (expectedText) => { });