import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../util/hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2) 
Given('the date info received by who field should be visible', async (expectedText) => {})

When('user clicks the field', async (expectedText) => {})

When('the user selects the next days date from the calendar', async (expectedText) => {})

Then('the respective date should be visible in the field', async (expectedText) => {})