/**
 * Function for testing
 **/

var pInstaller = require('./index');

function pInstallerTest() {
	//happy path
	var happyTest = [ "KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: Leetmeme", "Ice: " ];
	var happy = pInstaller(happyTest);	
	var expected = ['Cyberportal','Ice','KittenService','Leetmeme','CamelCaser','Fraudstream' ]
	if(happy.length !== expected.length)
		return console.log(false);
	for(var i = happy.length; i--;){
		if(happy[i] !== expected[i])
			return console.log(false);
	}
	console.log(true);

	//sad path
	var sadTest = [ "KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: ", "Ice: Leetmeme", ];
	try {
		var sad = pInstaller(sadTest)
	} catch(e) {
		console.log(e.message);
	}
	//error path(?)

	return;
}

pInstallerTest();