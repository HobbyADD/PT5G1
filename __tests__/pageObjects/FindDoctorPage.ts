import {
    By
  } from "selenium-webdriver";

  import { BasePage } from "./BasePage";

  export class FindDoctorPage extends BasePage {
    //locators
    //search input bar and location filtering from the Find A Doctor page
    searchTermBar: By = By.xpath("//input[@placeholder='Type in your search term']");
    locationBar: By = By.xpath("//select[@id='SearchLocation']/option");

    //search button from the find a doctor page
    searchBtn: By = By.id("searchBtn");

    //results page information
    resultsList: By = By.xpath("//ol[@class='result-items']/li");
    resultsHeader: By = By.xpath("//div[@id='edd114075cc94f35b9bccc081668c123']/h2");
    drSpecialtyValue: By = By.xpath("//ol[@class='speciality']/li");
    drLocationValue: By = By.xpath("//ol[@class='location']/li");
    drName: By = By.xpath("//h4");
    
    //results page navigation buttons
    returnToSearchBtn: By = By.className("menu-bioback");
    // this object is clickable, but jest times out before the test will click it
    nextPageBtn: By = By.xpath("//a[@id='pagination-next.pagination-item.control']");

    constructor() {
      super("https://www.mayoclinic.org/appointments/find-a-doctor");
    }
   /**
     * This method navigates to additional result pages that populate from our search
     * @param searchTerm - This string contains the term that was searched in the search bar.
     * @param locations - This string contains the location filter that was applied. It 
     * should be noted that this will be formatted as follows: Rochester, MN = "Rochester%2C%20MN"
     * Jacksonville, FL = "Jacksonville%2C%20FL", and Phoenix/Scottsdale, AZ = "Phoenix%2C%20AZ"
     * @param pageNumber - This value will be the number corresponding with the results page
     * you wish to navigate to
     */
      async dynamicNavigate(searchTerm: string, locations: string, pageNumber: number) {
        await this.driver.get(`https://www.mayoclinic.org/appointments/find-a-doctor/search-results?searchterm=${searchTerm}&locations=${locations}&page=${pageNumber}#edd114075cc94f35b9bccc081668c123`)
    }
    async searchTerm(searchText: string) {
        await this.setInput(this.searchTermBar, searchText);
    }
    async clickSearchBtn() {
        await this.click(this.searchBtn);
    }
   /**
     * This method selects a value from the location drop down list
     * to filter the search results.
     * @param value - This must be written exactly as the location
     * buttons are displayed on the website. 
     * Within the context of our testing the following
     * strings are valid values: "Rochester, MN", "Phoenix/Scottsdale, AZ",
     * and "Jacksonville, FL"
     */
    async locationBarDDL(value: string) {
        await this.selectDDLByValue(this.locationBar, value);
    }
    async clickReturnToSearch() {
        await this.click(this.returnToSearchBtn);
    }
    /**
     * This method returns information from the search results.
     * @param resultTerm within the context of our testing the following
     * string values are the inputs for resultTerm: "location", 
     * "specialty", and default
     * @returns a text string with the corresponding information for a specified
     * "location" returns text for the doctor's location, "specialty" returns text
     * for the doctor's specialty, "default" returns text for the doctor's name
     */
    async getSearchResults(resultTerm: string) : Promise<string[]> {
        let resultLocator : By
        switch (resultTerm){

            case "location": 
            resultLocator = this.drLocationValue
            break

            case "specialty":
            resultLocator = this.drSpecialtyValue
            break

            default:
            resultLocator = this.drName
        }
        var resultListValue: Array<string> = [];
        let list = await this.getElements(this.resultsList);
        for (let i = 0; i < list.length; i++) {

            let value = await list[i].findElement(resultLocator)
          await resultListValue.push(await value.getText());
        }
        return resultListValue;
    }
    /**
     * The method uses the getText function on the results page 
     * @returns : the search header 
     * The search header tells us what term was searched and how many results are populated.
     */
    async getResultsHeader() : Promise<string> {
        return await this.getText(this.resultsHeader);
    }
    // jest always times out on this function, 
    //potentially because it is interacting with a new page
    //may need a different class to use this
    async clickNextPageBtn() {
        await this.click(this.nextPageBtn);
    }
    async clickReturntoSearchBtn() {
        await this.click(this.returnToSearchBtn);
    }
}

