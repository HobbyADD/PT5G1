import {
    By
  } from "selenium-webdriver";

import { BasePage } from "./BasePage";
import { NewAppointmentsPage } from "./NewAppointmentsPage";

export class AppointmentsPage extends BasePage {

    appointmentsPageHdr: By = By.xpath('//h1[text()="Tell us about your needs."]');
    requestAppointmentBtn: By = By.css('button[class="button desktop-only"]');
    noCOVIDVaccineAptBtn: By = By.xpath('//a[text()="No"]');
    yesCOVIDVaccineAptBtn: By = By.xpath('//a[text()="Yes"]');
    covidVacchineHdr: By = By.xpath('//h1[contains(text(),"Mayo Clinic COVID")]');

    constructor(){
        super("https://www.mayoclinic.org/appointments");
    }

    async clickBeginOnlineRequestBtn(){
        await this.click(this.requestAppointmentBtn);
    }

    /**
     * clicking the "No" button for requesting a COVID vaccine appoinment will navigate the user to the 
     * New Appointments Page. To ensure that multiple drivers are not being created, the existing driver
     * is instead passed to the New Appointments Page
     * @returns a new instance of the NewAppointmentsPage which includes the current driver
     */
    async clickNoBtn(): Promise<NewAppointmentsPage> {
        await this.click(this.noCOVIDVaccineAptBtn);
        return new NewAppointmentsPage(this.driver);
    }

    async clickYesBtn(){
        await this.click(this.yesCOVIDVaccineAptBtn);
    }

    async isAppointmentsPage(): Promise<boolean> {
        let element = this.getElement(this.appointmentsPageHdr);
        return element != null;
    }

    async isCOVIDVaccinePage(): Promise<boolean> {
        let element = await this.getElement(this.covidVacchineHdr);
        return element != null;
    }
}