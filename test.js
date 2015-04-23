/**
 * Function for testing
 **/

var pInstaller = require('./index');

function pInstallerTest() {
	//happy path
	var happyTest = [ "KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: Leetmeme", "Ice: " ];
	var sorted = pInstaller(happyTest);	
	var expected = ['Cyberportal','Ice','KittenService','Leetmeme','CamelCaser','Fraudstream' ]
	if(sorted.length !== expected.length)
		return console.log(false);
	for(var i = sorted.length; i--;){
		if(sorted[i] !== expected[i])
			return console.log(false);
	}
	return console.log(true);

	//sad path
	var sadTest = [ "KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: ", "Ice: Leetmeme", ];

	//error path(?)

	return;
}

pInstallerTest();