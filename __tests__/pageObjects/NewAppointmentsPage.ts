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
    mayoClinicBtn: By = By.xpath('//div[@class="navbar-large"]//button[@class="logo-holder"]');

    //cancel request confirmation popup 
    cancelBtnFromPopup: By = By.xpath('//button[@class="text-button cancel"]');
    exitBtnFromPopup: By = By.xpath('//app-modal-small[@modaltype="exit"]//button[@class="continue-btn domestic"]');

    //is patient radio group
    isPatientRadioBtn: By = By.xpath('//app-radio-button[@id="pi-is-patient-yes"]');
    isNotPatientRadioBtn: By = By.xpath('//app-radio-button[@id="pi-is-patient-no"]');

    //is existing patient radio group
    isExistingPatientRadioBtn: By = By.xpath('//app-radio-button[@id="pi-existing-patient-yes"]');
    isNotExistingPatientRadioBtn: By = By.xpath('//app-radio-button[@id="pi-existing-patient-no"]');
    isNotSureExistingPatientRadioBtn: By = By.xpath('//app-radio-button[@id="pi-existing-patient-not-sure"]');

    //drop down lists
    relationshipDDL: By = By.xpath('//select[@id="pi-relationship"]/option');
    valFromRelationshipDDL: By = By.xpath('//select[@id="pi-relationship"]/option[@selected="selected"]');

    //panel headers
    mayoClinicNumberHdr: By = By.xpath('//h1[text()="Please provide your Mayo Clinic number."]');
    patientPersonalInfoHdr: By = By.xpath('//h1[text()="What’s your legal name?"]');
    nonPatientPersonalInfoHdr: By = By.xpath('//h1[text()="What’s your name?"]');

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

    async clickMayoClinicLogoBtn(){
        await this.click(this.mayoClinicBtn);
    }

    async clickCancelBtnFromPopup(){
        await this.click(this.cancelBtnFromPopup);
    }

    async clickExitBtnFromPopup(){
        await this.click(this.exitBtnFromPopup);
    }

    async selectRelationship(relationshipToSelect: string){
        await this.selectDDLByValue(this.relationshipDDL, relationshipToSelect);
    }

    async isProvideMayoClinicNumberPanel(): Promise<boolean> {
        let element = this.getElement(this.mayoClinicNumberHdr);
        return element != null;
    }

    async isPatientPersonalInfoPanel(): Promise<boolean> {
        let element = this.getElement(this.patientPersonalInfoHdr);
        return element != null;
    }

    async isNonPatientPersonalInfoPanel(): Promise<boolean> {
        let element = this.getElement(this.nonPatientPersonalInfoHdr);
        return element != null;
    }
    
    /**
     * returns the currently selected value from the relationship DDL however this only works
     * ON PAGE LOAD therefore can only be used if the page has reloaded
     * @returns the text of the currently selected option from the relationship DDL
     */
    async getCurrentlySelectedRelationship(): Promise<string> {
        let relationshipText: string = await this.getText(this.valFromRelationshipDDL);
        return relationshipText;
    }
}