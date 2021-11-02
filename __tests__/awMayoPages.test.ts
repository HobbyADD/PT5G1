//this is A.W.'s test file for the Mayo Clinic project

import { Builder, Capabilities, By } from "selenium-webdriver";
import { urlIs } from "selenium-webdriver/lib/until";
import { getParsedCommandLineOfConfigFile, WatchDirectoryFlags } from "typescript";

//pulling this from the getParsedCommandLineOfConfigFile.ttest.ts 
//file that Andrew created at the end of module 2.4 lecture video

//this first line is making sure we can use the chormedriver
const chromedriver = require('chromedriver')

//we are building the driver for chrome
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

//varialble for url https://www.mayoclinic.com
const myUrl = "https://www.mayoclinic.com"


//this is to test that the page will open
test("opening Mayo Clinic", async () => {
    await driver.get("https://www.mayoclinic.org/")
})

//this part will locate the links for the following pages:
//Patient and Visitor Guide - the css selector for this is "id" #task-patient-visitor "By.id("task-patient-visitor")"
//Contact Us - the css selector for this is "id" #task-contact-us "By.id("task-contact-us")"
//COVID-19 vaccine and information - the css selector for this is "id" #task-covid-19-hub "By.id("task-covid-19-hub")"


//This tests the Patient andvisitor guide page opened
test("Patient and Visitor Guide page opened", async () => {
    let patientVisitor = By.css('#task-patient-visitor')
    
    let myPatientVisitor = await driver.findElement(patientVisitor)

    await myPatientVisitor.click()
 //this returns to the home page  
    await driver.get(myUrl)
    
})

//This tests the Contact Us page opened
test("Contact Us page opened", async () => {
    let contactUs = By.css('#task-contact-us')
        
    let myContactUs = await driver.findElement(contactUs)

    await myContactUs.click()
//this returns to the home page
    await driver.get(myUrl)
 
})


//This tests the COVID-19 vaccine and information page opened
test("COVID-19 vaccine and information page opened", async () => {
    let patientVisitor = By.css('#task-covid-19-hub')

    let myPatientVisitor = await driver.findElement(patientVisitor)
//this returns to the home page
    await myPatientVisitor.click()
    
    await driver.get(myUrl)
})