class Environment{
    
    constructor(page)
    {
        this.page=page
        //this.Test="http://localhost:3000/cellmaUser/login";
        //this.Test="http://10.0.0.64:3000/cellmaUser/login"
        this.Test="https://testcellma.com/cellmaUser/login"
        //this.Test="http://10.0.0.63:3000/cellmaUser/login";
        //this.Test="https://10.0.0.63/cellmaUser/login"
        // this.Test1="https://10.0.0.99/cellmaUserAPI/swagger-ui/index.html"
        // this.Test="https://10.0.0.63/cellmaUser/login"PharmacyPortal
        this.RefPortal="https://c4portal.riomed.com/cellmaPortal/portal"
        this.PharmacyPortal = "https://c4portal.riomed.com/cellmaPortal/portal"
        // this.Test="http://10.0.0.106:3001/cellmaPortal/portal/home"
        // this.Test="http://localhost:3001/cellmaUser/login"
    }     
   
}
module.exports=Environment
