describe('Test_001', function(){
	var ELEMENTS=require("./allWebElements.js");
	var data=require("./data.js");
	var using=require('jasmine-data-provider');
	var EC = protractor.ExpectedConditions;
	
	 var originalTimeout;
	    beforeEach(function() {
	      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
	      jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
	    });
	
	 afterEach(function() {
	        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
	        console.log("Test closed");
	    });
	 
		 
	 //data stores actual data
	 //description stores subobject names
	 //On every execution the new data will be stored on data and description will store data name
	 using(data.DataDrive,function(data, description){
		 it('LogIn'+description,function(){
			 ELEMENTS.getURL();
			 ELEMENTS.EmailId.sendKeys(data.username);
			 ELEMENTS.EmailNext.click();
			 browser.wait(EC.visibilityOf(ELEMENTS.Password), 30000);
			 ELEMENTS.Password.sendKeys(data.password);
			 ELEMENTS.LogIn.click();
			 browser.wait(EC.visibilityOf(ELEMENTS.SoltionTable), 30000);
			 browser.sleep(3000);
			 
			 
		})
	 });
	
	
	
	it('Create a solution', function(){
		ELEMENTS.CreateSolution.click();
		 browser.wait(EC.visibilityOf(ELEMENTS.SolutionCreateButton), 30000);
		 ELEMENTS.SolutionName.sendKeys("Sol_012");
		 ELEMENTS.SolutionCreateButton.click();
		 browser.wait(EC.visibilityOf(ELEMENTS.SolOverViewTitle), 60000);
		
	})
	
	it('Provision BTM',function(){
		setTimeout(function() {
	        done();
	      }, 600000);
		 ELEMENTS.BTM.click(); 
		 browser.wait(EC.visibilityOf(ELEMENTS.BtmProvision), 10000);
		 ELEMENTS.BtmProvision.getText().then(function(text){
			 console.log(text);
			 browser.wait(EC.invisibilityOf(ELEMENTS.BtmProvision), 600000);
			 browser.switchTo().frame("solutionIframe");
			 browser.wait(EC.visibilityOf(ELEMENTS.TermLibrary), 10000);
		 })
		 
	})
	
	it('Create a Library',function(){
		 browser.wait(EC.visibilityOf(ELEMENTS.CreateLibrary), 10000);
		 ELEMENTS.CreateLibrary.click().then(function(){
			 browser.sleep(4000);
		 });
		 ELEMENTS.NewLibraryName.sendKeys("newlib1");
		 ELEMENTS.CreateLibButton.click();
	})
	
	
})