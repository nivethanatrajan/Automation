import { Page, expect } from "@playwright/test";


export default class HomePage {
    
    page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    async Showheading(){
        const headingtext = await this.page.locator('#localAccountForm >> text=Sign in with your email address') ;
        await expect(headingtext).toBeVisible();
    }

      async eleloginAzureBtn(){
            const loginbtn = this.page.click("text=Login using Azure");
            if(loginbtn != null){
                return loginbtn;
            }else throw new Error
            ("noelements")     
        }
}