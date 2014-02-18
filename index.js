var lisp = require('./lib/lisp'),
	sqrt = require('./lib/sqrt'),
	tree = require('./lib/tree');

var aTree = [];
aTree = tree.add(1, aTree);
console.log(aTree);
console.log(tree.right(aTree));
aTree = tree.add(2, aTree);
console.log(aTree);
aTree = tree.add(3, aTree);
console.log(aTree);
console.log(tree.elementOfSet(4, aTree));