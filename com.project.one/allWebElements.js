function ficoElement(){
	this.EmailId=element(by.name("username"));
	this.EmailNext=element(by.id("idp-discovery-submit"));
	this.Password=element(by.name("password"));
	this.LogIn=element(by.id("okta-signin-submit"));
	this.CreateSolution=element(by.buttonText("New Solution"));
	this.SolutionName=element(by.id("editSolnName"));
	this.SoltionTable=element(by.id("solnListTable"));
	this.SolutionCreateButton=element(by.buttonText("Create"));
	this.SolOverViewTitle=element(by.id("solnOverviewTitle"));
	this.BTM=element(by.linkText("Business Terms"));
	this.BtmProvision=element(by.id("provLandingPgContainer")).element(by.tagName("h2"));
	this.TermLibrary=element(by.linkText("Term Libraries"));
	this.CreateLibrary=element(by.buttonText("Create Library..."));
	this.NewLibraryName=element(by.model("cCtrl.library.name"));
	this.CreateLibButton=element(by.buttonText("Create"));
	
	this.getURL=function(){
		browser.get("https://url");
	};
}

module.exports=new ficoElement();