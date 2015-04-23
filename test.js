/**
 * Function for testing
 **/

var pInstaller = require('./index');

function pInstallerTest() {
	//happy path
	var happyTest = [ "KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: Leetmeme", "Ice: " ];
	var sorted = pInstaller(happyTest);	
	var expected = ["Cyberportal", "Ice", "KittenService", "Leetmeme", "CamelCaser"]
	console.log(expected == sorted);
	//sad path
	var sadTest = [ "KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: ", "Ice: Leetmeme", ];

	//error path(?)

	return;
}

pInstallerTest();