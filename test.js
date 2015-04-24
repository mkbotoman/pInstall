/**
 * Function for testing
 **/

var pInstaller = require('./index');

function pInstallerTest() {
	//happy path
	var happyTest = [ "KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: Leetmeme", "Ice: " ];
	var happy = pInstaller(happyTest);	
	var expected = ['KittenService','Ice','Cyberportal','Leetmeme','CamelCaser','Fraudstream' ];
	if(happy.length !== expected.length)
		return console.log(false);
	for(var i = happy.length; i--;){
		if(happy[i] !== expected[i])
		return console.log(false);
	}
	console.log('Actual output matches expected output');

	//sad path
	var sadTest = [ "KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: ", "Ice: Leetmeme", ];
	try {
		var sad = pInstaller(sadTest)
	} catch(e) {
		if ( e = 'closed chain : Leetmeme is in Ice')
			console.log('Closed chain failed as expected');
	}

	return;
}

pInstallerTest();