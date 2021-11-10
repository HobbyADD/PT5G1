import { AppointmentsPage } from "./pageObjects/AppointmentsPage";

describe('test requesting an online appointment', () => {
    const apptPage = new AppointmentsPage();
    beforeEach(async () => {
        await apptPage.navigate();
    });
    afterAll(async () => {
        await apptPage.driver.quit();
    });
    test('PT5G1-2 Request a COVID-19 appointment', async ()=> {
        await apptPage.clickBeginOnlineRequestBtn();
        await apptPage.clickYesBtn();

        let isCorrectPage = await apptPage.isCOVIDVaccinePage();
        expect(isCorrectPage).toBe(true);
    });
    test('PT5G1-8 Request a new appointment for someone else', async()=> {
        await apptPage.clickBeginOnlineRequestBtn();
        let newApptPage = await apptPage.clickNoBtn();

        await newApptPage.clickContinueBtn();
        await newApptPage.clickStartBtn();
        await newApptPage.clickIsNotPatientRadioBtn();
        await newApptPage.clickContinueBtn();
        await newApptPage.selectRelationship('Guardian');
        await newApptPage.clickContinueBtn();
        
        let isCorrectPanel = await newApptPage.isNonPatientPersonalInfoPanel();
        expect(isCorrectPanel).toBe(true);

        await newApptPage.clickMayoClinicLogoBtn();
        await newApptPage.clickExitBtnFromPopup();
    });
    test('PT5G1-10 Request a new appointment as an existing Mayo Clinic patient', async()=> {
        await apptPage.clickBeginOnlineRequestBtn();
        let newApptPage = await apptPage.clickNoBtn();

        await newApptPage.clickContinueBtn();
        await newApptPage.clickStartBtn();
        await newApptPage.clickIsPatientRadioBtn();
        await newApptPage.clickContinueBtn();
        await newApptPage.clickIsExistingPatientRadioBtn();
        await newApptPage.clickContinueBtn();

        let isCorrectPanel = await newApptPage.isProvideMayoClinicNumberPanel();
        expect(isCorrectPanel).toBe(true);

        await newApptPage.clickMayoClinicLogoBtn();
        await newApptPage.clickExitBtnFromPopup();
    });
    test('PT5G1-14 Request a new appointment as a new Mayo Clinic patient', async()=> {
        await apptPage.clickBeginOnlineRequestBtn();
        let newApptPage = await apptPage.clickNoBtn();

        await newApptPage.clickContinueBtn();
        await newApptPage.clickStartBtn();
        await newApptPage.clickIsPatientRadioBtn();
        await newApptPage.clickContinueBtn();
        await newApptPage.clickIsNotExistingPatientRadioBtn();
        await newApptPage.clickContinueBtn();

        let isCorrectPanel = await newApptPage.isPatientPersonalInfoPanel();
        expect(isCorrectPanel).toBe(true);

        await newApptPage.clickMayoClinicLogoBtn();
        await newApptPage.clickExitBtnFromPopup();
    });
    test('PT5G1-21 Exit setting up an appointment request', async()=> {
        await apptPage.clickBeginOnlineRequestBtn();
        let newApptPage = await apptPage.clickNoBtn();

        await newApptPage.clickContinueBtn();
        await newApptPage.clickStartBtn();
        await newApptPage.clickIsPatientRadioBtn();
        await newApptPage.clickContinueBtn();
        await newApptPage.clickIsNotSureExistingPatientRadioBtn();
        await newApptPage.clickContinueBtn();
        await newApptPage.clickMayoClinicLogoBtn();
        await newApptPage.clickExitBtnFromPopup();

        let isCorrectPage = await apptPage.isAppointmentsPage();
        expect(isCorrectPage).toBe(true);
    });
    test('PT5G1-32 Return to a previous question when requesting an online appointment', async()=> {
        let relationshipToExpect: string = 'Life Partner';
        
        await apptPage.clickBeginOnlineRequestBtn();
        let newApptPage = await apptPage.clickNoBtn();

        await newApptPage.clickContinueBtn();
        await newApptPage.clickStartBtn();
        await newApptPage.clickIsNotPatientRadioBtn();
        await newApptPage.clickContinueBtn();
        await newApptPage.selectRelationship(relationshipToExpect);
        await newApptPage.clickContinueBtn();
        await newApptPage.clickBackBtn();

        let relationship = await newApptPage.getCurrentlySelectedRelationship();
        expect(relationship).toBe(relationshipToExpect);

        await newApptPage.clickMayoClinicLogoBtn();
        await newApptPage.clickExitBtnFromPopup();
    });
})