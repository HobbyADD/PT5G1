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
    RochesterMNBtn: By = By.css("option[value='Rochester, MN']");
    PhoenixAZBtn: By = By.css("option[value='Phoenix, AZ']");
    JacksonvilleFLBtn: By = By.css("option[value='Jacksonville, FL']");

    //search button from the find a doctor page
    searchBtn: By = By.id("searchBtn");

    //results page info
    resultsList: By = By.xpath("//ol[@class='result-items']/li");
    resultsHeader: By = By.xpath("//div[@id='edd114075cc94f35b9bccc081668c123']/h2");
    DrSpecialty: By = By.xpath("//ol[@class='speciality']/li");
    DrLocation: By = By.xpath("//ol[@class='location']/li");
    MNLocationResults: By = By.xpath("//li[text()='Rochester, MN']");
    AZLocationResults: By = By.xpath("//li[text()='Phoenix, AZ']");
    FLLocationResults: By = By.xpath("//li[text()='Jacksonville, FL']");
    DrName: By = By.xpath("//h4");
    appliedFilters: By = By.className("applied-filters");

    //results page navigation buttons
    returnToSearchBtn: By = By.className("menu-bioback");
    // this object is clickable, but jest times out before the test will click it
    //nextPageBtn: By = By.xpath("//a[@id='pagination-next.pagination-item.control']");

    constructor() {
      super("https://www.mayoclinic.org/appointments/find-a-doctor");
    }
    async navigate() {
        await this.driver.get(this.url);
    }
    async searchTerm(searchText: string) {
        await this.setInput(this.searchTermBar, searchText);
    }
    async clickSearchBtn() {
        await this.click(this.searchBtn);
    }
    async setLocationMN() {
        await this.click(this.locationBar);
        await this.click(this.RochesterMNBtn);
    }
    async setLocationAZ() {
        await this.click(this.locationBar);
        await this.click(this.PhoenixAZBtn);
    }
    async setLocationFL() {
        await this.click(this.locationBar);
        await this.click(this.JacksonvilleFLBtn);
    }
    async clickReturnToSearch() {
        await this.click(this.returnToSearchBtn);
    }
    async getSearchResults() {
        const resultList: Array<string> = [];
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
        const specialtyList: Array<string> = [];
        let list = await this.driver.findElements(this.DrSpecialty);
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
        const MNList: Array<string> = [];
        let list = await this.driver.findElements(this.MNLocationResults);
        for (let i = 0; i < list.length; i++) {
            await MNList.push(await list[i].getText());
        }
        return list;
    } 
    async getAZresults() {
        const AZList: Array<string> = [];
        let list = await this.driver.findElements(this.AZLocationResults);
        for (let i = 0; i < list.length; i++) {
            await AZList.push(await list[i].getText());
        }
        return list;
    } 
    async getFLresults() {
        const FLList: Array<string> = [];
        let list = await this.driver.findElements(this.FLLocationResults);
        for (let i = 0; i < list.length; i++) {
            await FLList.push(await list[i].getText());
        }
        return list;
    } 
    // //this element is located however, does not return the text we need to verify 
    // //our tests
    // async getAppliedFilters() {
    //     const filtersList: Array<string> = [];
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
