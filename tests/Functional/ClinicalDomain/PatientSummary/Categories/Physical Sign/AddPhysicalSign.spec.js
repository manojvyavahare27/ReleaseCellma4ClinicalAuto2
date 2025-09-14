//Sathyanarayan

const fs = require("fs");
const XLSX = require("xlsx");
const path = "C:/Riomed/Cellma4Automation";
const mysql = require("mysql2");
const convertExcelToJson = require("../../../../../../config/global-setupOptimized");

const { test, expect } = require("@playwright/test");
const connectToDatabase = require("../../../../../../manoj").default;
const { executeQuery } = require("../../../../../../databaseWriteFile"); // Update the path accordingly
import compareJsons from "../../../../../../compareFileOrJson";

import logger from "../../../../../../Pages/BaseClasses/logger";
import LoginPage from "../../../../../../Pages/BaseClasses/LoginPage";
import Homepage from "../../../../../../Pages/BaseClasses/Homepage";
import ConfirmExisting from "../../../../../../Pages/PatientDomain/ConfirmExisting";
import ContactHistory from "../../../../../../Pages/ClinicalDomain/PatientSummary/ContactHistory";
import PatientSearch from "../../../../../../Pages/PatientDomain/PatientSearch";
import Environment from "../../../../../../Pages/BaseClasses/Environment";
import Menu from "../../../../../../Pages/BaseClasses/Menu";
import ClinicalSummary from "../../../../../../Pages/ClinicalDomain/PatientSummary/ClinicalSummary";
import ClinicalExtraDetails from "../../../../../../Pages/ClinicalDomain/PatientSummary/ClinicalExtraDetails";


import { TIMEOUT } from "dns";
import { error } from "console";
import { before } from "node:test";
import { toggleDivVisibility } from "../../../../../../UtilFiles/DynamicUtility";

// Array to store console logs

const consoleLogs = [];
let jsonData;

test.describe("Excel Conversion Physical Sign Category", () => {
  test("Extract Patient Summary Details", async ({ }) => {
    const excelFilePath =
      process.env.EXCEL_FILE_PATH || "./ExcelFiles/PatientSummary.xlsx";
    const jsonFilePath = "./TestDataWithJSON/PatientDomain/PatientSummary.json";

    console.log("excelFilePath:", excelFilePath);
    console.log("jsonFilePath:", jsonFilePath);
    const conversionSuccess = await convertExcelToJson(
      excelFilePath,
      jsonFilePath
    );
    if (conversionSuccess) {
      // jsonData = require("../../../TestDataWithJSON/PatientDomain/PatientDetails.json");
      jsonData = require("../../../../../../TestDataWithJSON/PatientDomain/PatientSummary.json");
      console.log("Excel file has been converted successfully!");
      console.log("jsonData:", jsonData); // Log the loaded JSON data
      console.log("excelFilePath after conversion:", excelFilePath);
      console.log("jsonFilePath after conversion:", jsonFilePath);
    } else {
      throw new Error("Excel to JSON conversion failed.");
    }
  });
});

test.describe("Physical Sign Category", () => {
  test("Add Physical Sign", async ({ page }) => {
    if (!jsonData || !jsonData.PatientDetails) {
      throw new Error("JSON data is missing or invalid.");
    }
    let index = 0;
    for (const data of jsonData.PatientDetails) {
      const loginpage = new LoginPage(page);
      const homepage = new Homepage(page);
      const environment = new Environment(page);
      const confirmexisting = new ConfirmExisting(page);
      const contacthistory = new ContactHistory(page);
      const patientsearch = new PatientSearch(page);
      const Physical = new ClinicalSummary(page);
      const PhysicalExtraDetails = new ClinicalExtraDetails(page);


      const menu = new Menu(page);
      await page.goto(environment.Test);
      await loginpage.enterUsername(jsonData.loginDetails[0].username);
      logger.info("Username enter successfully");
      await loginpage.enter_Password(jsonData.loginDetails[0].password);
      logger.info("Password enter successfully");
      await loginpage.clickOnLogin();
      logger.info("Clicked on Login button successfully");
      await homepage.clickOnHomeDashboardIcon()
      await homepage.clickOnPatientIcon();
      logger.info("Clicked on Patient Icon successfully");
      await patientsearch.clickOnSearchButton();
      logger.info("Clicked on Search button successfully");
      await patientsearch.enterGivenName(data.pat_firstname);
      logger.info("Given Name entered successfully");
      
      await patientsearch.enterFamilyName(data.pat_surname);
      logger.info("Family Name entered successfully");
      //await patientsearch.selectSex(data.pat_sex);

      await patientsearch.selectBornDate(jsonData.PatientDetails[index].pat_dob);
      //await patientsearch.selectBornDate(formattedDate);
      await patientsearch.clickOnSearchButton();
      await patientsearch.clickOnSearchPatientLink();
      await page.waitForTimeout(1500);
      await patientsearch.ClickOnYesConfirmLegitimateRelationship()
      await page.waitForTimeout(1500);
      await confirmexisting.clickOnConfirmExistingDetails();
      await page.waitForTimeout(1000);
      await page.getByLabel('cancelIcon').click()
     
      await contacthistory.clickOnShowFilter()
      await contacthistory.selectServiceFilter("General Medicine Automation");
      await contacthistory.selectContactReasonFilter("Assessments");
      //await contacthistory.enterContactDate("26/04/2024");
      await contacthistory.selectContactReason("Assessments");
      await contacthistory.selectContactLocation("Cardio Location");
      //await contacthistory.enterContactWith("Dr Sathya");
      await contacthistory.clickOnAddContact();
      
     // await page.pause()
      await Physical.selectCategoryFromList("Physical Signs");
      await page.waitForTimeout(2000)


      //Add Physical sign
      await Physical.selectandAddClinicalItem("BMI"); //This searches item and clicks on add button
      await page.waitForTimeout(2000);
      await PhysicalExtraDetails.addPhysicalSignButton()
     // await page.pause()
//await page.pause()
     for (const field of jsonData.PhysicalSign) {
  console.log(`Label: ${field.Label}, Value: ${field.Value}`);
  await PhysicalExtraDetails.enterAirorOxygen(field.Label, field.Value);
}

      // await PhysicalExtraDetails.enterAirorOxygen(jsonData.PhysicalSign[index].label, jsonData.PhysicalSign[index].value);
      // await PhysicalExtraDetails.enterAirorOxygen('Blood Pressure Diastolic (mmHg)', '75');
      // await PhysicalExtraDetails.enterAirorOxygen('Blood Pressure Diastolic (mmHg) (12)', '80');
      // await PhysicalExtraDetails.enterAirorOxygen('Blood Pressure Systolic (mmHg)', '125');
      // await PhysicalExtraDetails.enterAirorOxygen('Blood Pressure Systolic (mmHg) (mmHg )', '99');
      // await PhysicalExtraDetails.enterAirorOxygen('BMI (body mass index) centile', '99');
      // await PhysicalExtraDetails.enterAirorOxygen('Capillary refill time (seconds)', '2');
      // await PhysicalExtraDetails.enterAirorOxygen('Foetal heart rate', '72');
      // await PhysicalExtraDetails.enterAirorOxygen('Fundal height of uterus', '68');

      // await PhysicalExtraDetails.enterAirorOxygen('Halo sign', '52');
      // await PhysicalExtraDetails.enterAirorOxygen('Height', '162');
      // await PhysicalExtraDetails.enterAirorOxygen('Height (cm) (cm)', '168');
      // await PhysicalExtraDetails.enterAirorOxygen('Height and weight', '61');

      // await PhysicalExtraDetails.enterAirorOxygen('News Score', '100');
      // await PhysicalExtraDetails.enterAirorOxygen('O2 (L/Min)', '18');
      // await PhysicalExtraDetails.enterAirorOxygen('Oxygen (12)', '102');
      // await PhysicalExtraDetails.enterAirorOxygen('Oxygen Saturation Scale 1 (%)', '98');

      // await PhysicalExtraDetails.enterAirorOxygen('Oxygen Saturation Scale 2 (%)', '99');
      // await PhysicalExtraDetails.enterAirorOxygen('PEWS score', '55');
      // await PhysicalExtraDetails.enterAirorOxygen('Physical', '69');

      // await PhysicalExtraDetails.enterAirorOxygen('Pulse (Beats per minute)', '298');
      // await PhysicalExtraDetails.enterAirorOxygen('Pulse-resting-rate(bpm)', '78');
      // await PhysicalExtraDetails.enterAirorOxygen('Respiratory Rate (Breaths per minute)', '48');
      // await PhysicalExtraDetails.enterAirorOxygen('Respiratory Rate', '298');

      // await PhysicalExtraDetails.enterAirorOxygen('Serum neutralization test', '19');
      // await PhysicalExtraDetails.enterAirorOxygen('SPO2', '65');
      // await PhysicalExtraDetails.enterAirorOxygen('Structure of epiphyseal plate', '89');
      // await PhysicalExtraDetails.enterAirorOxygen('Temperature (degree C)', '36');
      // await PhysicalExtraDetails.enterAirorOxygen('Weight (kg) (kg)', '58');
     // await page.pause()
      await page.locator("xpath=//button[@data-testid='Save']").click()
      await expect(page.getByText('Physical Signs added successfully')).toHaveText('Physical Signs added successfully')
      









    }
  });
});