import { Page, expect } from "@playwright/test";
import PlaywrightWrapper from "../../util/commonfile/playwrightwrapper";

export default class usercreation {
    private base:PlaywrightWrapper;
  constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    } 
}