var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Test_001.js'],
  onPrepare :function(){
	  browser.waitForAngularEnabled(false);
	  browser.manage().window().maximize();
	  
	  jasmine.getEnv().addReporter(
		        new Jasmine2HtmlReporter({
		          savePath: 'target/screenshots'
		        })
		      );
		   
  },
//Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
  ,
  suite:{
	  smoke:['specFile_001.js', 'specFile_002.js' ],//spec file names
  	  regression:"sepefile_005.js"
  }
  
};