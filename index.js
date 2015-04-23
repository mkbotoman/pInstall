/**
 * Package Installer
 *
 * @param {string} packages
 * @returns {Array}
 */
module.exports = exports = function(packages) {
  return pInstaller(parsedItems(packages), packages)
}

exports.array = pInstaller

function pInstaller(items, packages) {
  var dependants = items[0];
  var dependencies = items[1];
  var helper = [];
  var installMe = [];

  for ( i = 0; i < packages.length; i++ ) {
    var parsed = packages[i].split(": ");
    //check for circular dependency
    // if (parsed[1] && ) {
    //   throw New Error("Packages contain a circular dependency!");
    //   return;
    // }

    //if the dependent is not a dependency or already in the helper, add it to the helper
    if (helper.indexOf(parsed[0]) === -1 && dependencies.indexOf(parsed[0]) === -1) {
      helper.push(parsed[0]);
    }
    //if dependency is not already being installed
    if (parsed[1] && installMe.indexOf(parsed[1]) === -1) {
      installMe.push(parsed[1]);
    }
  }

  for (t = 0; t < helper.length; t++) {
    if (installMe.indexOf(helper[t]) === -1) {
      installMe.push(helper[t]);
    }
  }
  return installMe;
}
//helper function to parse array and output two equal length arrays
function parsedItems(arr){
	var parsed = [];
	var items = [];
	var dependencies = [];
  	for ( l = 0; l < arr.length; l++ ) {
  		var combine = arr[l];
  		var split = combine.split(": ");

  		items.push(split[0]);

  		if(split[1]) {
  			dependencies.push(split[1]);
      }
	 }
	return [items, dependencies];
}

