import { FindDoctorPage } from "./pageObjects/FindDoctorPage";
  // importing the datasets for Find a Doctor testing
  import * as conditionsData from "./data/conditionsData.json";
  import * as mispelledData from "./data/mispelledData.json";
  import * as nameData from "./data/nameData.json";
  import * as procedureData from "./data/procedureData.json";
  import * as locationData from "./data/locationData.json"

describe("Find a Doctor", () => {
const page = new FindDoctorPage;
    beforeEach(async () => {
      await page.navigate();
    });
    afterAll(async () => {
      await page.driver.quit();
    });
/** This test uses a forEach loop to individually search the 5 most common 
 * health conditions in the U.S. on the Find A Doctor page.
 */
    conditionsData.forEach((searchText) => {
     test ("PT5G1-6 Find a doctor searching by condition", async () => {
       await page.searchTerm(searchText);
       await page.clickSearchBtn();
       let searchHeader = await page.getResultsHeader();
       expect(searchHeader).toContain(searchText);
       console.log(searchHeader);
     });
    });
/** This test uses a forEach loop to individually search 5 procedures that 
 *  Mayo Clinic states they specialize in on the Find A Doctor page.
 */
    procedureData.forEach((searchText) => {
      test ("PT5G1-7 Find a doctor searching by procedure", async () => {
       await page.searchTerm(searchText);
       await page.clickSearchBtn();
       let searchHeader = await page.getResultsHeader();
       expect(searchHeader).toContain(searchText);
       console.log(searchHeader);
     });
    });
 /** This test uses a forEach loop to individually search the 5 common 
 * names on the Find A Doctor page.
 */
    nameData.forEach((searchText) => {
      test ("PT5G1-9 Find a doctor searching by name", async () => {
       await page.searchTerm(searchText);
       await page.clickSearchBtn();
       let searchHeader = await page.getResultsHeader();
       expect(searchHeader).toContain(searchText);
       let resultListName = await page.getSearchResults("default");
       console.log(resultListName[0]);
     });
    });
 /** This test uses a forEach loop to individually utilize the three different
 * location search filters on the Find A Doctor page.
 */
    locationData.forEach((value) => {
      test ("PT5G1-11 Find a doctor filtering by location", async () => {
        await page.locationBarDDL(value);
        await page.clickSearchBtn();
        let resultListLocation = await page.getSearchResults("location");
        console.log(resultListLocation[0]);
       });  
    });
  /** This test uses a forEach loop to individually search the 5 commonly
 * misspelled medical terms on the Find A Doctor page.
 */
    mispelledData.forEach((searchText) => {
      test ("PT5G1-28 Find a doctor searching misspelled data", async () => {
       await page.searchTerm(searchText);
       await page.clickSearchBtn();
       let searchHeader = await page.getResultsHeader();
       expect(searchHeader).toContain(searchText);
       expect(searchHeader).toContain("No results for");
       console.log(searchHeader);
      });
    });
/** This test ensures that using more specific search terms narrows the search results.
 */
    test ("PT5G1-29 Find a Doctor - Narrowing Search Terms", async () => {
      await page.searchTerm("cardiology");
      await page.clickSearchBtn();
      let searchHeader = await page.getResultsHeader();
      expect(searchHeader).toContain("cardiology");
      console.log(searchHeader);
      await page.clickReturntoSearchBtn();
      await page.searchTerm("pediatric cardiology");
      await page.clickSearchBtn();
      let searchHeader2 = await page.getResultsHeader();
      expect(searchHeader2).toContain("pediatric cardiology");
      console.log(searchHeader2);
    });
  /**
   * This test ensures that generalizing your search term broadens your results.
   */
    test ("PT5G1-30 Find a Doctor - Broadening Search Terms", async () => {
      await page.searchTerm("pediatric cardiology");
      await page.clickSearchBtn();
      let searchHeader = await page.getResultsHeader();
      expect(searchHeader).toContain("pediatric cardiology");
      console.log(searchHeader);
      await page.clickReturntoSearchBtn();
      await page.searchTerm("cardiology");
      await page.clickSearchBtn();
      let searchHeader2 = await page.getResultsHeader();
      expect(searchHeader2).toContain("cardiology");
      console.log(searchHeader2);
    });
  /** This test utilizes both a search term and location filter to 
   * complete a search on the Find A Doctor page.
 */
    test ("PT5G1-31 Find a doctor using a search term and location filter", async () => {
      await page.searchTerm("cardiology");
      await page.locationBarDDL("Rochester, MN");
      await page.clickSearchBtn();
      let searchHeader = await page.getResultsHeader();
      expect(searchHeader).toContain("cardiology");
      let resultListLocation = await page.getSearchResults("location");
      expect(resultListLocation).toContain("Rochester, MN");
      console.log(resultListLocation[0]);
    });      
});
