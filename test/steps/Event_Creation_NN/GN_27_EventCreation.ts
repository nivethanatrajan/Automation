import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../util/hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2) 
Given('date info received by who field is visible', async (expectedText) => { });
Then('the date in the field matches the date of the current day', async (expectedText) => { });