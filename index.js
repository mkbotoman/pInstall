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
  var items = items[0];
  var dependencies = items[1];
  return console.log(items[0] + " AND " + items[1]  + " AND " + packages);
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
  		if(split[1])
  			dependencies.push(split[1])
	}
	return [items, dependencies];
}

