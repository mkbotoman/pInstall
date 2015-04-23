/**
 * Function for testing
 **/

var pInstaller = require('./index');

function pInstallerTest() {
	//happy path
	var happyTest = [ "KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: Leetmeme", "Ice: " ];
	//sad path
	var sadTest = [ "KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: ", "Ice: Leetmeme", ];

	//error path(?)

	return console.log("yay!");
}

pInstallTest();