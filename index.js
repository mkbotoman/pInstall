/**
 * Package Installer
 *
 * @param {string} packages
 * @returns {Array}
 */
module.exports = exports = function(packages) {
  return pInstaller(parsedItems(packages))
}

exports.array = pInstaller

function pInstaller(packages) {
  var groups   = {}, 
      sorted  = [], 
      done = {},
      finished = []; 
 
  var Node = function(id) {
    this.id = id;
    this.afters = [];
  }
 
  packages.forEach(function(v) {
    var from = v[0], to = v[1];
    if (!groups[from]) groups[from] = new Node(from);
    if (!groups[to]) groups[to]     = new Node(to);
    groups[from].afters.push(to);
  });
 
  Object.keys(groups).forEach(function visit(idstr, ancestors) {
    var node = groups[idstr],
        id   = node.id;
 
    if (done[idstr]) return;
 
    if (!Array.isArray(ancestors)) ancestors = [];
 
    ancestors.push(id);
 
    done[idstr] = true;
    node.afters.forEach(function(afterID) {
      if (ancestors.indexOf(afterID) >= 0)  // if already in ancestors, a closed chain exists.
        throw new Error('Cyclic dependency : ' +  afterID + ' is in ' + id);
 
      visit(afterID.toString(), ancestors.map(function(v) { return v }));
    });

    if (id != 'none') 
      sorted.push(id);
    
  });
  for ( t = 0; t < sorted.length; t++ ) {
    console.log('Installing ' + sorted[t] + '...')
  }
  return sorted;
}
//helper function to parse array and output two equal length arrays
function parsedItems(arr){
	var parsed = [];
	var items = [];
	var dependencies = [];
  	for ( l = 0; l < arr.length; l++ ) {
  		var combine = arr[l];
  		var split = combine.split(": ");
		if(split[1]) {
			items.push([split[0], split[1]]);
    } else {
      items.push([split[0], 'none']);
    }
  }
	return items;
}

