import { Page, expect } from "@playwright/test";
import PlaywrightWrapper from "../../util/commonfile/playwrightwrapper";
require("dotenv").config();

export default class LoginPage {
    private base:PlaywrightWrapper;
  constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }
    private Element = {
        userInput:"input[name='Email Address']",
        PasswordInput:"input[name='Password']",
        SigninBtn:"button[text()='Sign in']"
    }
    async navigateToRegisterPage() {
        await this.base.goto("https://goarn-uat.adapptlabs.com/kp");
    }
     async loginall(){
        const emailaddress:string  = process.env.emailaddress as string;
        const emailPassword:string  = process.env.emailPassword as string;
        await this.page.type(this.Element.userInput,emailaddress);
       await this.page.type(this.Element.PasswordInput,emailPassword );
    }
   // async enteremail(emailaddress:string)
   // {
       //  await this.page.locator("input[name='Email Address']").type(emailaddress)
     //   await this.page.getByLabel(this.Element.userInput).fill(emailaddress);    
   // }
   // async enterLoginPsw(emailPassword:string)
   // {
         //await this.page.locator("input[name='Password']").type(emailPassword)
   //      await this.page.getByLabel(this.Element.PasswordInput).fill(emailPassword); 
   // } 

    async clickSigninBtn(){
        const loginbtn = this.page.click("//button[text()='Sign in']");
        if(loginbtn != null){
            return loginbtn;
        }else throw new Error
        ("noelements")
        //await this.base.waitAndClick(this.Element.SigninBtn);  
    }
    async cliknegbtn(){
        await this.page.click("//button[text()='Sign in']");
       //await expect (this.page.locator("[style*='block']")).toContainText('Please enter your Email Address');
      // await expect (this.page.locator("[style*='block']")).toContainText('Please enter your password');
        expect(this.page.getByAltText("Please enter your Email Address"));
        expect(this.page.getByAltText("Please enter your password"));
        }
        async ShowMultiheading(){
            const mulsignbtn = this.page.click("//button[text()='Send Code']");
            if(mulsignbtn != null){
                return mulsignbtn;
            }else throw new Error
            ("noelements") 
        }
} 
