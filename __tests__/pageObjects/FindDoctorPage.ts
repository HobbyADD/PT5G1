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

    async searchTerm(searchText: string) {
        await this.setInput(this.searchTermBar, searchText);
    }
    async clickSearchBtn() {
        await this.click(this.searchBtn);
    }
    //To use this method you must input a value. For the location drop down
    // the values are: "Rochester, MN", "Jacksonville, FL", "Phoenix/Scottsdale, AZ"
    async locationBarDDL(value: string) {
        await this.selectDDLByValue(this.locationBar, value);
    }
    async clickReturnToSearch() {
        await this.click(this.returnToSearchBtn);
    }
    //When using this method you must input a result term option. Once the option is
    //placed into the method it will return the corresponding text
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
    //this method uses the getText function to retreive the result header
    //that includes the term that was searched and number of results
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

