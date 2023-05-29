import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../util/hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)
 
Given('the date info received by who field is visible', async (expectedText) => { });
When('the user clicks the field', async (expectedText) => { });
When('the user selects the previous days date from the calendar', async (expectedText) => { });
Then('the respective date should be displayed in the field', async (expectedText) => { });