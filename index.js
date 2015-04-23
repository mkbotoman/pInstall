/**
 * Package Installer
 *
 * @param {string} packages
 * @returns {Array}
 */
module.exports = exports = function(packages){
  return pInstaller(parsedItems(packages), packages)
}

exports.array = pInstaller

function pInstaller(items, packages) {
  var dependants = items[0];
  var dependencies = items[1];
  return console.log(dependants + " AND " + dependencies  + " AND " + packages);
}
//helper function to parse array and 
function parsedItems(arr){
	var parsed = [];
	var items = [];
	var dependencies = [];
  	for ( l = 0; l < arr.length; l++ ) {
  		var combine = arr[l];
  		var split = combine.split(": ");
  		items.push(split[0]);
  console.log(split[1])
  		if(split[1])
  			dependencies.push(split[1])
	 }
console.log(dependencies);
	return [items, dependencies];
}

