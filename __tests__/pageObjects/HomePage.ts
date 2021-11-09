//this is the home page class object

//removed builder, capabilities, until and webdriver packages as these will come in from the BasePage object
import {By} from "selenium-webdriver"; 
import { isThisTypeNode } from "typescript";

import { BasePage } from "./BasePage";

//this class is for finding all the elements on the home page that will be clicked
export class HomePage extends BasePage {
    requestApptLink :By = By.css('#task-find-doctor');
    findDrLink :By = By.css('#task-appointments');
    contactUsLink :By = By.css('#task-contact-us');
    covidInfoLink :By = By.css('#task-covid-19-hub');
    patientVisitorLink :By = By.css('#task-patient-visitor');


     
    constructor(){
        super("https://www.mayoclinic.org/");
    }
    async clickReqAppt (){
        await this.click(this.requestApptLink);
    }
    async clickfindDr (){
        await this.click(this.findDrLink);
    }
    async clickContactUs (){
        await this.click(this.contactUsLink);

    }async clickCovidInfo (){
        await this.click(this.covidInfoLink);
    }
    async clickPatientVisitor (){
        await this.click(this.patientVisitorLink);
    }

    async isContactPage () : Promise <boolean> {
        let element = await this.getElement(By.xpath("//h2[text()='Addresses and phone numbers']"))
        return element != null

    }
    async isPatientGuidePage () : Promise <boolean> {
        let element = await this.getElement(By.xpath("//h1[text()='Patient & Visitor Guide']"))
        return element != null

    }
    async isCovidPage () : Promise <boolean> {
        let element = await this.getElement(By.xpath("//p[text()='Vaccine guidance']"))
        return element != null

    }

}
