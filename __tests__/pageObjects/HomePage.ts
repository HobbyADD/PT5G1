//this is the home page class object
import {Builder,By,Capabilities,until,WebDriver,} from "selenium-webdriver";

import { BasePage } from "./BasePage";

//this class is for finding all the elements on the home page that will be clicked
export class HomePage extends BasePage {
    requestAppt :By = By.css('#task-find-doctor');
    findDr :By = By.css('#task-appointments');
    contactUs :By = By.css('#task-contact-us');
    covidInfo :By = By.css('#task-covid-19-hub');
    patientVisitor :By = By.css('#task-patient-visitor');
    
    constructor(options){
        super(options);
        this.url="https://www.mayoclinic.org/"
    }
    async clickReqAppt (){
        await this.click(this.requestAppt);
    }
    async clickfindDr (){
        await this.click(this.findDr);
    }
    async clickContactUs (){
        await this.click(this.contactUs);

    }async clickCovidInfo (){
        await this.click(this.covidInfo);
    }
    async clickPatientVisitor (){
        await this.click(this.patientVisitor);
    }
}

