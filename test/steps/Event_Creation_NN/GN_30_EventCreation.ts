import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../util/hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)
Given('the serious public health impact checkbox is visible', async (expectedText) => { })
When('the user clicks the checkbox twice', async (expectedText) => { })
Then('the checkbox should not have a tickmark', async (expectedText) => { })