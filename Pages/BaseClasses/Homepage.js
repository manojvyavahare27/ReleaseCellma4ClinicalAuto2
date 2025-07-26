class Homepage{
    constructor(page)
    {
        this.page=page
        this.iconPatient=page.locator("xpath=//div[@data-testid='moduleDrawerPatients']")
        this.sidebarPatientIcon=page.locator("xpath=//img[@alt='Patients Image Avatar']")
        this.iconHomePage=page.locator("xpath=//img[@alt='homeDashboard']")
        this.iconAppointment=page.getByTestId('Appointments').nth(1)
        this.pharmacyIcon=page.locator("xpath=//div[@class='MuiGrid2-root MuiGrid2-direction-xs-row MuiGrid2-grid-xs-6 MuiGrid2-grid-sm-4 MuiGrid2-grid-md-2.4 MuiGrid2-grid-lg-2 css-1wkwkft']//div[@aria-label='Pharmacy']")

        
        this.iconReferral=page.getByRole('heading', { name: 'Referrals' })
        this.iconMDT=page.getByRole('heading', { name: 'MDT' })
        this.iconUser=page.getByRole('heading', { name: 'Users' })
        this.iconAdmin=page.locator("xpath=//div[@class='MuiGrid-root MuiGrid-container css-1d3bbye']//div[@aria-label='Admin']")
        this.iconAdminMod=page.locator("xpath=//div[@aria-label='Admin']")
        
        //PharmacyHomePage
        this.findPatientSidebarLink=page.locator("xpath=//h1[normalize-space()='Find Patient']")
        this.Medicationsidebar=page.locator("xpath=//h1[normalize-space()='Medications']")
        this.AddMedicationlink=page.getByRole('button', { name: 'Add' })
        this.ContacHistorycategory=page.locator("xpath=//h1[contains(text(),'Contact History')]")


        //SideIcon
        this.homeDashboard=page.locator("xpath=//img[@alt='homeDashboard']")
        this.homeicon=page.locator("xpath=//img[@alt='homeDashboard']")
        this.sideIconTask=page.getByTestId('tasks')
        this.sideIconAlerts=page.getByTestId('alerts')
        this.sideIconMessages=page.getByTestId('messages')
        this.sideIconAppointment=page.locator("xpath=//div[@data-testid='appointments']")
        this.sideIconLetters=page.getByTestId('letters')
        this.sideIconReferrals=page.getByTestId('referrals')
        this.sideIconPatient=page.locator("xpath=//div[@data-testid='moduleDrawerPatients']")
        this.sideIconStock=page.locator("xpath=//ul[@class='MuiList-root MuiList-padding css-1wduhak']//div[@aria-label='Stock']")
       // this.sideIconRejectedReferral=page.getByTestId('ourRejectedReferrals')
        
        this.sideIconRejectedReferral=page.locator("xpath=//h1[normalize-space()='Our Rejected On Referrals']")
        this.sideiconourPendingOnReferral=page.getByTestId('ourPendingOnReferral')

        //Menu
        this.btnMenu=page.getByTestId('Menu')
        this.MenuDDFindPatient=page.getByText('Find Patient')
        this.MenuDDMyDetails=page.getByTestId('menuDropDownMyDetails')
        this.MenuDDMyTask=page.getByText('My Tasks')
        this.MenuDDMyAlerts=page.getByTestId('menuDropDownMyAlerts')
        this.MenuDDMyTemplates=page.getByText('My Templates')   
        this.MenuDDMyPhysicalSigns=page.getByText('My Physical Signs')   
        this.MenuDDMyAppointments=page.getByText('My Appointments')  
        this.MenuDDCellmaUserVersion=page.getByText('Cellma User Version')
        this.CloseCellmaVersionPopup=page.getByTestId('CancelIcon')
        this.MenuDDLogout=page.getByText('Logout')
    }
    //PharmacyHomepage

    async redirectsToHomePage()
    {
        
    }
    async clickOnContactHistoryCategory()
    {
        await this.ContacHistorycategory.click()
    }
    async clickOnMenuFindPatientLink()
    {
        await this.findPatientSidebarLink.click()
    }
    async clickOnMedicationSidebar()
    {
        await this.Medicationsidebar.click()
    }
    async clickOnAddMedicationlink()
    {
        await this.AddMedicationlink.click();
    }
    async clickOnPharmacyIcon()
    {
        await this.pharmacyIcon.click()
    }
    //Click On Side Icons on Home page.

    async clickOnSideIconPatient()
     {
        await this.sideIconPatient.click()
     }

     async clickOnSideIconStock()
     {
        await this.sideIconStock.click()
     }

    async clickOnHomeDashboardIcon()
    {
       await this.homeDashboard.click()
    }
    async clickOnSidebarAppointmentIcon()
    {
        await this.sideIconAppointment.click()
    }
    async closeCellmaVersionPopup()
    {
        await this.CloseCellmaVersionPopup.click()
    }
    async clickOnMenuDDLogout()
    {
        await this.MenuDDLogout.click()
    }
    async clickOnMenuDDCellmaUserVersion()
    {
        await this.MenuDDCellmaUserVersion.click()
    }
    async clickOnMenuDDMyAppointments()
    {
        await this.MenuDDMyAppointments.click()
    }
    async clickOnMenuDDMyPhysicalSigns()
    {
        await this.MenuDDMyPhysicalSigns.click()
    }
    async clickOnMenuDDMyTemplates()
    {
        await this.MenuDDMyTemplates.click()
    }
    async clickOnMenuDDMyAlerts()
    {
        await this.MenuDDMyAlerts.click()
    }
    async clickOnMenuDDMyTask()
    {
        await this.MenuDDMyTask.click()
    }
    async clickOnMenuDDMyDetails()
    {
        await this.MenuDDMyDetails.click()
    }

    async clickOnMenuFindPatientLink()
    {
        await this.MenuDDFindPatient.click()
    }

    async clickOnMenu()
    {
        await this.btnMenu.click()
    }

    async clickOnSideIconRejectedReferrals()
    {
       await this.sideIconRejectedReferral.click()
    }
    async clickOnOurPendingonReferrals()
    {
        await this.sideiconourPendingOnReferral.click()
    }
    async clickOnSideIconReferrals()
    {
       await this.sideIconReferrals.click()
    }

    async clickOnSideIconLetters()
    {
       await this.sideIconLetters.click()
    }
    async clickOnSideIconMessage()
    {
       await this.sideIconMessages.click()
    }
    async clickonSidebarHomeIcon()
    {
        await this.homeicon.click()
    }
    async clickOnSideIconAlerts()
    {
       await this.sideIconAlerts.click()
     }
     async clickOnSideIconTask()
     {
        await this.sideIconTask.click()
     }
     async clickOnUserIcon()
    {
        await this.iconUser.click()
    }
    async clickOnPatientIcon()
    {
        await this.iconPatient.click()
    }
    
    async clickOnHomePageIcon()
    {
        await this.iconHomePage.click()
    }
    async clickOnAppointmentIcon()
    {
        await this.iconAppointment.click()
    }
    async clickOnAdminIcon()
    {
        await this.iconAdminMod.nth(1).click()
    }
    async clickOnReferralIcon()
    {
        await this.iconReferral.click()
    }
    async clickOnMDTIcon()
    {
        await this.iconMDT.click()
    }
    
}
module.exports=Homepage