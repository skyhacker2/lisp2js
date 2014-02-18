var lisp = require('./lisp');

var tree = function() {};

tree.entry = function(aTree) {
	return lisp.car(aTree);
}

tree.left = function(aTree) {
	return lisp.cadr(aTree);
}

tree.right = function(aTree) {
	return lisp.caddr(aTree);
}

tree.make = function(entry, left, right) {
	return lisp.list(entry, left, right);
}

tree.elementOfSet = function(x, set) {
	if (set == null || lisp.empty(set)) {
		return false;
	} else if (tree.entry(set) == x) {
		return true;
	} else if (tree.entry(set) < x) {
		return tree.elementOfSet(x, tree.left(set));
	} else if (tree.entry(set) > x) {
		return tree.elementOfSet(x, tree.right(set));
	}
}

tree.add = function(x, set) {
	if (set == null || lisp.empty(set)) {
		return tree.make(x, null, null);
	} else if (tree.entry(set) == x) {
		return set;
	} else if (tree.entry(set) < x) {
		return tree.make(tree.entry(set), tree.add(x, tree.left(set)), tree.right(set));
	} else if (tree.entry(set) > x) {
		return tree.make(tree.entry(set), tree.left(set), tree.add(x, tree.right(set)));
	}
}

module.exports = tree;