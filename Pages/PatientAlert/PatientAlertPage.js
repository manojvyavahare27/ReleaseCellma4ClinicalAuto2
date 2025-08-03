class PatientAlertPage
{
    constructor(page)
    {
        this.page=page;
        this.sidebarDrawer=this.page.locator("xpath=//*[name()='path' and contains(@d,'M3 18h13v-')]")
        this.linkslink=this.page.locator("xpath=//button[@data-testid='Links']")
        //Links
        this.myTask=this.page.locator("xpath=//li[@data-testid='myTasks']")
        this.serviceAppReminder=page.locator("xpath=//li[@data-testid='serviceAppointmentReminders']")
        this.cancelButton=this.page.locator('button[aria-label="cancelIcon"]');    
        this.dropdownAlertDaysSelected= this.page.locator("xpath=//input[@id='alertsDaysSelected']")

    }

    async clickOnSidebarDrawer()
    {
        await this.sidebarDrawer.click()
    }
    async clickOnLinksLink()
    {
        await this.linkslink.click()
    }

    async clickOnMyTaskLink()
    {
        await this.myTask.click()
    }
    async clickOnServiceAppReminder()
    {
        await this.serviceAppReminder.click()
    }
    async clickOnCancelButton()
    {
        await this.cancelButton.click()
    }
    
}


module.exports=PatientAlertPage;