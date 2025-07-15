//Added by Manoj Vyavahare

const fs = require("fs");
const XLSX = require("xlsx");
const path = "D:/Riomed/Cellma4Automation";
const mysql = require("mysql2");
const convertExcelToJson = require('../../../config/global-setupOptimized');

const { test, expect, chromium } = require("@playwright/test");
const connectToDatabase = require("../../../manoj");
const { executeQuery } = require("../../../databaseWriteFile"); // Update the path accordingly
import compareJsons from "../../../compareFileOrJson"; // Update the path accordingly

import logger from "../../../Pages/BaseClasses/logger";
import LoginPage from "../../../Pages/BaseClasses/LoginPage";
import FindPatient from "../../../Pages/PharmacyPortal/FindPatient"; 
//import from "../../../Pages/ReferralPortal/FindPatient";
import Homepage from "../../../Pages/BaseClasses/Homepage";
import PortalHome from "../../../Pages/ReferralPortal/PortalHome";
import PatientSearch from "../../../Pages/PatientDomain/PatientSearch";
import PatientDetails from "../../../Pages/PatientDomain/PatientDetails";
import Environment from "../../../Pages/BaseClasses/Environment";
import Menu from "../../../Pages/BaseClasses/Menu";
import PatientWizard from "../../../Pages/PatientDomain/PatientWizard";
import PatientDuplicateCheck from "../../../Pages/PatientDomain/PatientDuplicateCheck";
import AddPatient from "../../../Pages/PatientDomain/AddPatient";
import AddAddress from "../../../Pages/PatientDomain/AddAddress";
import AddPIP from "../../../Pages/PatientDomain/AddPIP";
import ViewPIP from "../../../Pages/PatientDomain/ViewPIP";
import AddGP from "../../../Pages/PatientDomain/AddGP";
import PrintIDCard from "../../../Pages/PatientDomain/PrintIDCard";
import { TIMEOUT } from "dns";
import { error, log } from "console";
import { before } from "node:test";

const logindata = JSON.parse(JSON.stringify(require("../../../TestData/PharmacyPortal/Login.json")));
const patientdetailsdata = JSON.parse(JSON.stringify(require("../../../TestData/PharmacyPortal/PatientDetails.json")));
const pipdetailsdata = JSON.parse(JSON.stringify(require("../../../TestData/PatientDomain/PIPDetails.json")));
const gpdata = JSON.parse(JSON.stringify(require("../../../TestData/PatientDomain/NewGPDetails.json")));

const consoleLogs = [];
let jsonData;

test.describe('Excel Conversion', () => {
  test('Extract Patient Details', async ({ }) => {
    const excelFilePath = process.env.EXCEL_FILE_PATH || './ExcelFiles/PharmacyPortal.xlsx';
    const jsonFilePath = "./TestDataWithJSON/PharmacyPortal/PharmacyPortalDetails.json";
    const conversionSuccess = await convertExcelToJson(excelFilePath, jsonFilePath);

    if (conversionSuccess) {
      jsonData = require("../../../TestDataWithJSON/PharmacyPortal/PharmacyPortalDetails.json");
      console.log('Excel file has been converted successfully!');
      console.log('jsonData:', jsonData);
      console.log('excelFilePath after conversion:', excelFilePath);
      console.log('jsonFilePath after conversion:', jsonFilePath);
    } else {
      throw new Error('Excel to JSON conversion failed.');
    }
  });
});

test.describe('New Patient', () => {
  test('Register New Patient', async ({ page }) => {
    if (!jsonData || !jsonData.addPatient) {
      throw new Error('JSON data is missing or invalid.');
    }

    let index = 0;

    for (const data of jsonData.addPatient) {
      const loginpage = new LoginPage(page);
      const portalhome = new PortalHome(page);      
      const environment = new Environment(page);
      const patientsearch = new PatientSearch(page);
      const patientduplicatecheck = new PatientDuplicateCheck(page);
      const findPatient=new FindPatient(page)
     
      await page.goto(environment.RefPortal);
      await page.pause();
      await portalhome.clickOnPharmacyPortalButton();
      await loginpage.enterReferralPortalUserName(jsonData.loginDetails[0].username);
      await loginpage.enterRefrralPortalPassword(jsonData.loginDetails[0].password);
      await loginpage.clickOnReferralPortalLoginButton();
      await expect(page.getByText('Login success')).toHaveText('Login success');
      await page.pause();

      await findPatient.clickOnSearchButton();
      logger.info("Clicked on Search button successfully");

      await findPatient.enterGivenName(jsonData.addPatient[index].pat_firstname);
      logger.info("Given Name entered successfully");

      await findPatient.enterFamilyName(jsonData.addPatient[index].pat_surname);
      logger.info("Family Name entered successfully");

      await findPatient.enterSex(data.pat_sex);
      await findPatient.enterBorn(jsonData.addPatient[index].pat_dob);

      await findPatient.clickOnSearchButton();
      await page.waitForTimeout(2000)
      await findPatient.clickOnAddPatientButton();

await page.pause()
      await patientduplicatecheck.clickOnDuplicateCheckButton();

      await expect(page.getByText("Photo Identification required")).toHaveText("Photo Identification required");
      await expect(page.getByText("Photo Identification ID required")).toHaveText("Photo Identification ID required");
      await expect(page.getByText("Middle name(s) is required")).toHaveText("Middle name(s) is required");

      ////////// Patient Address comparison placeholder //////////

      index++; // Don't forget to increment index
    }
  });
});
