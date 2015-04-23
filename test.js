/**
 * Function for testing
 **/

var pInstaller = require('./index');

function pInstallerTest() {
	//happy path
	var happyTest = [ "KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: Leetmeme", "Ice: " ];
	var sorted = pInstaller(happyTest);	

	//sad path
	var sadTest = [ "KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: ", "Ice: Leetmeme", ];

	//error path(?)

	return sorted;
}

pInstallerTest();