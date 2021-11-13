# PT5G1_MayoClinic
- [Summary](#summary)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [What Do We Test](#what-do-we-test)
- [How Do We Test](#how-do-we-test)
    - [Page Objects](#page-objects)
    - [Data Files](#data-files)
   
## Summary   
Github repository for DevMountain QRPT5 group 1 capstone project centered around perfoming automated tests on the Mayo Clinic website.

This project showcases our collaborative automation efforts to test
Mayo Clinic.

Authors:

- Shayla
- A.W.
- Jemma

Selenium Webdriver is used to hook into the browser with Jest as test runner

## Setup

To set up the project.

1. clone the respository
1. `npm i`

## Running Tests

To run all the tests, use the command: `npm test`

To run a specific test, use the command: `npx jest test_name`

## What Do We Test

The functionality we tested was focussed primarily on the 5 main links on the Mayo Clinic home page which were:

- Request an Appointment
    - Clicking on this link would navigate the user to the Appointments page
    - The user has the ability to request an appointment for themselves or for another person
    - The user answers a series of questions which changes the panels on the screen 
    - Due to Mayo Clinic being live web application, tests were stopped when personal health information was required
- Find a Doctor
    - Clickin on this link would navigate the user to the Find a Doctor page
    - The user has the ability to search for a doctor at Mayo Clinic based on the name, the condition or procedure they specialize in, and/or their location
    - Search results returned were verified to ensure that they contained the search term, and that search results would increase or decrease depending on whether the search terms were broad or specific
- The following pages were informational pages with limited functionality but were tested to ensure that the links on the home page would successfully navigate to these pages:
    - Patient & Visitor Guide
    - Contact Us
    - COVID-19 vaccine & information

## How Do We Test

We organized our tests by inlcuding all tests in the following test files:

- RequestAppointment.test.ts
    - Includes all tests associated with requesting an appointment at Mayo clinic
- FindDoctorPage.test.ts
    - Includes all tests assocaited with using the search function to find a doctor at Mayo clinic
- InformationPage.test.ts
    - Includes all tests associated with navigating to the informational pages

### Page Objects

We made page objects for the following pages based on the POM design pattern whereby each page in the Mayo Clinic website that needed to be tested was modelled in it's own class. Informational pages were not modelled as they had no functionality tested.

- BasePage.ts
    - Parent class with all common functionality that would be found on any generic web page
    - Handles the navigation to pages, and stores the driver and url of any child page 
- HomePage.ts
    - Extends BasePage.ts
    - Handles the functionality associated with the home page of Mayo Clinic including the links to all the tested pages
    - Handles the functionality associated with verifying that Informational pages have been reached
- AppointmentsPage.ts
    - Extends BasePage.ts
    - Handles the functionality associated with beginning an appointment request
    - Handles the functionality associated with verifying that the COVID-19 vaccine page had been reached
- NewAppointmentsPage.ts
    - Extends BasePage.ts
    - Handles the functionality associated with selecting options and entering information required for a new appointment
- FindDoctorPage.ts
    - Extends BasePage.ts
    - Handles the functionality associated with the Find a Doctor search function and search results

### Data Files

Iteration is key to test some specific functionality, so we created files for the Find A Doctor search function which includes the following JSON data files:

- conditionsData.json
    - "Condition" is included as a suggested search term topic on the Find a Doctor page 
    - Values sourced from the top 20 most common conditions (doctorshealthpress.com)
- locationData.json
    - "Location" is included as a suggested search term topic on the Find a Doctor page
    - Values sourced from the Mayo Clinic's own doctors and medical staff location drop down lists
- mispelledData.json
    - Included because medical terms are frequently misspelled, especially those with Latin roots
    - Tests how the Find a Doctor search function would handle these misspelled terms
    - Values sourced from "List of Commonly Misspelled Medical Terms" from Caregiverology
- nameData.json
    - "Doctor's Name" is included as a suggested search term topic on the Find a Doctor page
    - Values sourced from looking at search results during exploratory testing and finding doctor name's with multiple results
- procedureData.json
    - "Procedure" is included as a suggested search term topic on the Find a Doctor page
    - Values sourced from the Mayo Clinic website itself https://www.mayoclinic.org/tests-procedures

## Lessons Learned

The following tools and technologies were learned during the course and used for this project:
- Jest was used as test runner with Selenium WebDriver used to hook into the browser, written in JavaScript
- JIRA was used to document the test plan, test cases and test summary report
- git and GitHub were used for source control with branching used for new functionality and pull requests opened to ensure code reviews could be completed before changes could be merged into the main code base
- API testing was limited to GET HTTP requests of the Find a Doctor search function in Postman
- The Page Object Model (POM) design strategy was used to model the Mayo Clinic web pages for testing

