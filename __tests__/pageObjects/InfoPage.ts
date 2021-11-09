//this is the various page class object

import {Builder,By,Capabilities,until,WebDriver,} from "selenium-webdriver";

import { BasePage } from "./BasePage";

//this class is for finding all the elements on the home page that will be clicked
export class InfoPage extends BasePage {
    contactUs :By = By.css('#task-contact-us');
    covidInfo :By = By.css('#task-covid-19-hub');
    patientVisitor :By = By.css('#task-patient-visitor');
    contactUsPage :String =  "https://www.mayoclinic.org/patient-visitor-guide";
    covidInfoPage :String =  "https://www.mayoclinic.org/coronavirus-covid-19";
    patientVisitorPage: string = "https://www.mayoclinic.org/patient-visitor-guide"

}


