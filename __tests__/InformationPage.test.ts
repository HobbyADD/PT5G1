import { Builder, Capabilities, By, WebDriver } from "selenium-webdriver";
import { Driver } from "selenium-webdriver/chrome";
import { urlIs } from "selenium-webdriver/lib/until";
import { getParsedCommandLineOfConfigFile, WatchDirectoryFlags } from "typescript";
import { HomePage } from "./pageObjects/HomePage";


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
    
    // await page.driver.get(myUrl)
    await page.clickPatientVisitor()
    expect(page.isPatientGuidePage).toBeTruthy()
    
    })

//This tests the Contact Us page opened
test("Contact Us page opened", async () => {
    
    await page.clickContactUs()
    expect(page.isContactPage).toBeTruthy()
    
    })

//This tests the COVID 19 page opened
test("COVID 19 Info page opened", async () => {

    await page.clickCovidInfo()
    expect(page.isCovidPage).toBeTruthy()
    
    })
})