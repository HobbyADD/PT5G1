import { FindDoctorPage } from "./pageObjects/FindDoctorPage";

describe("Find a Doctor", () => {
const page = new FindDoctorPage;
    beforeEach(async () => {
      await page.navigate();
    });
    afterAll(async () => {
      await page.driver.quit();
    });
    test("Searching a condition", async () => {
        await page.searchTerm("cardiology")
        await page.locationBarDDL("Jacksonville, FL")
        await page.clickSearchBtn()
        await page.dynamicNavigate("cardiology", "Jacksonville%2C%20FL", 2);
        await page.dynamicNavigate("cardiology", "Jacksonville%2C%20FL", 3);
        // let resultListLocation = await page.getSearchResults("location")
        // console.log(resultListLocation[0])
        // let header = await page.getResultsHeader()
        // console.log(header)
        // let resultListSpecialty = await page.getSearchResults("specialty")
        // console.log(resultListSpecialty[0])
        // let resultListName = await page.getSearchResults("default")
        // console.log(resultListName[0])
        // // expect(resultList.length).toBe(10);
    });
    // test("Setting a location filter: AZ", async () => {
    //     await page.searchTerm("hypertension")
    //     await page.setLocationAZ()
    //     await page.clickSearchBtn()
    //     let AZList = await page.getAZresults()
    //     expect(AZList.length).toBe(10);
    // });
    // test("Setting a location filter: FL", async () => {
    //     await page.setLocationFL()
    //     await page.clickSearchBtn()
    //     let FLList = await page.getFLresults()
    //     expect(FLList.length).toBe(10);
    // });
    // test("Setting a location filter: MN", async () => {
    //     await page.searchTerm("hypertension")
    //     await page.setLocationMN()
    //     await page.clickSearchBtn()
    //     let MNList = await page.getMNresults()
    //     expect(MNList.length).toBe(10);
    // });
    test ("PT5G1-6 Find a doctor searching by condition", async () => {
        
    })
  });
