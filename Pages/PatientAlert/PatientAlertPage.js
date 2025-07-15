class PatientAlertPage
{
    constructor(page)
    {
        this.page=page;
        this.sidebarDrawer=this.page.locator("xpath=//div[@class='MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters css-qj1uen']//*[name()='svg']")
        this.linkslink=this.page.locator("xpath=//span[@class='MuiButton-icon MuiButton-endIcon MuiButton-iconSizeSmall css-qpmepm']//*[name()='svg']")
        //Links
        this.myTask=this.page.locator("xpath=//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper MuiMenu-paper MuiMenu-paper css-1n9ohqc']//li[@data-testid='myTasks']")
        this.serviceAppReminder=page.locator("xpath=//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper MuiMenu-paper MuiMenu-paper css-1n9ohqc']//li[@aria-label='Service Appointment Reminders']")
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