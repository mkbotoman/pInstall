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
function pInstaller(edges) {
  var nodes   = {}, 
      sorted  = [], 
      visited = {},
      finished = []; 
 
  var Node = function(id) {
    this.id = id;
    this.afters = [];
  }
 
  // 1. build data structures
  edges.forEach(function(v) {
    var from = v[0], to = v[1];
    if (!nodes[from]) nodes[from] = new Node(from);
    if (!nodes[to]) nodes[to]     = new Node(to);
    nodes[from].afters.push(to);
  });
 
  // 2. topological sort
  Object.keys(nodes).forEach(function visit(idstr, ancestors) {
    var node = nodes[idstr],
        id   = node.id;
 
    // if already exists, do nothing
    if (visited[idstr]) return;
 
    if (!Array.isArray(ancestors)) ancestors = [];
 
    ancestors.push(id);
 
    visited[idstr] = true;
    node.afters.forEach(function(afterID) {
      if (ancestors.indexOf(afterID) >= 0)  // if already in ancestors, a closed chain exists.
        throw new Error('closed chain : ' +  afterID + ' is in ' + id);
 
      visit(afterID.toString(), ancestors.map(function(v) { return v })); // recursive call
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

