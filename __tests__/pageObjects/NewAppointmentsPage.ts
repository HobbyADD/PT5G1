import {
    By,
    WebDriver
  } from "selenium-webdriver";

import { BasePage } from "./BasePage";

export class NewAppointmentsPage extends BasePage {

    //locators
    //navigation buttons
    backBtn: By = By.css('.button-back');
    continueBtn: By = By.xpath('//button[text()[contains(.,"Continue")]]');
    startBtn: By = By.xpath('//button[text()[contains(.,"Start")]]');

    //Is patient radio group
    isPatientRadioBtn: By = By.xpath('//app-radio-button[@id="pi-is-patient-yes"]');
    isNotPatientRadioBtn: By = By.xpath('//app-radio-button[@id="pi-is-patient-no"]');

    //Is existing patient radio group
    isExistingPatientRadioBtn: By = By.xpath('//input[@id="radiopi-existing-patient-yes"]');
    isNotExistingPatientRadioBtn: By = By.xpath('//input[@id="radiopi-existing-patient-no"]');
    isNotSureExistingPatientRadioBtn: By = By.xpath('//input[@id="radiopi-existing-patient-not-sure"]');

    relationshipDDL: By = By.xpath('//select[@id="pi-relationship"]/option');

    /**
     * The New Appointments Page should be accessed via the Appointments Page. Therefore the driver should be
     * passed in from the relevant button click from the Appointments Page but for the puposes of allowing
     * stand-alone testing of the New Appointments Page, this parameter has been left optional
     * @param {WebDriver} driver - the driver created from the Appointments Page otherwise a new driver will be created
     */
    constructor(driver? : WebDriver){
        super("https://onlineservices.mayoclinic.org/NewAppointments/", driver);
    }

    async clickBackBtn(){
        await this.click(this.backBtn);
    }

    async clickContinueBtn(){
        await this.click(this.continueBtn);
    }

    async clickStartBtn(){
        await this.click(this.startBtn);
    }

    async clickIsPatientRadioBtn() {
        await this.click(this.isPatientRadioBtn);
    }

    async clickIsNotPatientRadioBtn() {
        await this.click(this.isNotPatientRadioBtn);
    }

    async clickIsExistingPatientRadioBtn(){
        await this.click(this.isExistingPatientRadioBtn);
    }

    async clickIsNotExistingPatientRadioBtn(){
        await this.click(this.isNotExistingPatientRadioBtn);
    }

    async clickIsNotSureExistingPatientRadioBtn(){
        await this.click(this.isNotSureExistingPatientRadioBtn);
    }

    async selectRelationship(relationshipToSelect: string){
        await this.selectDDLByValue(this.relationshipDDL, relationshipToSelect);
    }
}