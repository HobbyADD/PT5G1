import { Builder, Capabilities, By, WebDriver } from "selenium-webdriver";
import { Driver } from "selenium-webdriver/chrome";
import { urlIs } from "selenium-webdriver/lib/until";
import { getParsedCommandLineOfConfigFile, WatchDirectoryFlags } from "typescript";
import { HomePage } from "./pageObjects/HomePage";

//this is opening the browser to the home page and going to the home page before an async is executed
//it then loops until there are no more async functions. at that point it closes the browser
describe("Information Page Navigation", () => {
    const page = new HomePage();
    beforeEach(async () => {
      await page.navigate("https://www.mayoclinic.org/");
    });
    afterAll(async () => {
        await page.driver.quit();
    });
    

//This tests the Patient and visitor guide page opened
test("Patient and Visitor Guide page opened", async () => {
    
    //this is clicking on the link to the Patient Visitor page
    await page.clickPatientVisitor();

    //setting variable isPatientVisitorPageTrue to the HomePage file element locator
    let isPatientVisitorPageTrue = await page.isPatientGuidePage();
    expect(isPatientVisitorPageTrue).toBe(true);
    
    })

//This tests the Contact Us page opened
test("Contact Us page opened", async () => {
    
    //this is clicking on the link to the Contact Us page
    await page.clickContactUs();

    //setting variable isContactPageTrue to the HomePage file element locator
    let isContactPageTrue = await page.isContactPage();
    expect(isContactPageTrue).toBe(true);
    
    })

//This tests the COVID 19 page opened
test("COVID 19 Info page opened", async () => {

    //this is clicking on the link to the COVID 19 page
    await page.clickCovidInfo();

    //setting variable isCovidPageTrue to the HomePage file element locator
    let isCovidPageTrue = await page.isCovidPage();
    expect(isCovidPageTrue).toBe(true);
    
    })
})