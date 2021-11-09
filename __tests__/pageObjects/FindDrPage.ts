import {
    By
  } from "selenium-webdriver";

  import { BasePage } from "./BasePage";

  export class FindDrPage extends BasePage {
    //locators
    //search input bar and location filtering from the Find A Doctor page
    searchTermBar: By = By.xpath("//input[@placeholder='Type in your search term']");
    locationBar: By = By.id("SearchLocation");

    //location filter buttons
    rochesterMNBtn: By = By.css("option[value='Rochester, MN']");
    phoenixAZBtn: By = By.css("option[value='Phoenix, AZ']");
    jacksonvilleFLBtn: By = By.css("option[value='Jacksonville, FL']");

    //search button from the find a doctor page
    searchBtn: By = By.id("searchBtn");

    //results page info
    resultsList: By = By.xpath("//ol[@class='result-items']/li");
    resultsHeader: By = By.xpath("//div[@id='edd114075cc94f35b9bccc081668c123']/h2");
    drSpecialty: By = By.xpath("//ol[@class='speciality']/li");
    drLocation: By = By.xpath("//ol[@class='location']/li");
    mnLocationResults: By = By.xpath("//li[text()='Rochester, MN']");
    azLocationResults: By = By.xpath("//li[text()='Phoenix, AZ']");
    flLocationResults: By = By.xpath("//li[text()='Jacksonville, FL']");
    drName: By = By.xpath("//h4");
    appliedFilters: By = By.className("applied-filters");

    //results page navigation buttons
    returnToSearchBtn: By = By.className("menu-bioback");
    // this object is clickable, but jest times out before the test will click it
    //nextPageBtn: By = By.xpath("//a[@id='pagination-next.pagination-item.control']");

    constructor() {
      super("https://www.mayoclinic.org/appointments/find-a-doctor");
    }

    async searchTerm(searchText: string) {
        await this.setInput(this.searchTermBar, searchText);
    }
    async clickSearchBtn() {
        await this.click(this.searchBtn);
    }
    async locationBarDDL(value: string) {
        await this.selectDDLByValue(this.locationBar, value);
    }
    // async setLocationMN() {
    //     await this.click(this.locationBar);
    //     await this.click(this.rochesterMNBtn);
    // }
    // async setLocationAZ() {
    //     await this.click(this.locationBar);
    //     await this.click(this.phoenixAZBtn);
    // }
    // async setLocationFL() {
    //     await this.click(this.locationBar);
    //     await this.click(this.jacksonvilleFLBtn);
    // }
    async clickReturnToSearch() {
        await this.click(this.returnToSearchBtn);
    }
    async getSearchResults() {
        var resultList: Array<string> = [];
        let list = await this.driver.findElements(this.resultsList);
        for (let i = 0; i < list.length; i++) {
          await resultList.push(await list[i].getText());
        }
        return list;
    }
    async getResultsHeader() {
        await this.getText(this.resultsHeader);
    }
    //this element is located however, does not return the text we need to verify 
    //our tests
    async getSpecialty() {
        var specialtyList: Array<string> = [];
        let list = await this.driver.findElements(this.drSpecialty);
        for (let i = 0; i < list.length; i++) {
            await specialtyList.push(await list[i].getText());
        }
        return list;
    }
    // //this element is located however, does not return the text we need to verify 
    // //our tests
    // async getLocation() {
    //     const locationList: Array<string> = [];
    //     let list = await this.driver.findElements(this.DrLocation);
    //     for (let i = 0; i < list.length; i++) {
    //         await locationList.push(await list[i].getText());
    //     }
    //     return list;
    // } 
    async getMNresults() {
        var MNList: Array<string> = [];
        let list = await this.driver.findElements(this.mnLocationResults);
        for (let i = 0; i < list.length; i++) {
            await MNList.push(await list[i].getText());
        }
        return list;
    } 
    async getAZresults() {
        var AZList: Array<string> = [];
        let list = await this.driver.findElements(this.azLocationResults);
        for (let i = 0; i < list.length; i++) {
            await AZList.push(await list[i].getText());
        }
        return list;
    } 
    async getFLresults() {
        var FLList: Array<string> = [];
        let list = await this.driver.findElements(this.flLocationResults);
        for (let i = 0; i < list.length; i++) {
            await FLList.push(await list[i].getText());
        }
        return list;
    } 
    // //this element is located however, does not return the text we need to verify 
    // //our tests
    // async getAppliedFilters() {
    //     var filtersList: Array<string> = [];
    //     let list = await this.driver.findElements(this.appliedFilters);
    //     for (let i = 0; i < list.length; i++) {
    //       await filtersList.push(await list[i].getText());
    //     }
    //     return list; 
    // }

    // jest always times out on this function, 
    //potentially because it is interacting with a new page
    //may need a different class to use this
    //async clickNextPageBtn() {
    //     await this.click(this.nextPageBtn);
    // }
    async clickReturntoSearchBtn() {
        await this.click(this.returnToSearchBtn);
    }
}
