var lisp = function() {

}
lisp.empty = function(list) {
	if (list.length === 0) return true;
		else return false;
}

lisp.isList = function(list) {
	return list.constructor == Array;
}

lisp.car = function(list) {
	if (lisp.empty(list)) return [];
	return list[0];
}

lisp.cdr = function(list) {
	if (lisp.empty(list)) return [];
	return list.slice(1);
}

lisp.cons = function(item, list) {
	if (!lisp.isList(list)) throw new Error("Second arg is not a list");
	if (item == null) return list;
	var aList = list.slice(0);
	aList.unshift(item);
	return aList;
}

lisp.append = function(list1, list2) {
	if (lisp.empty(list1)) return list2;
	return lisp.cons(lisp.car(list1), lisp.append(lisp.cdr(list1), list2));
}

lisp.map = function(list, func) {
	if (lisp.empty(list)) return [];
	return lisp.cons(func(lisp.car(list)), lisp.map(lisp.cdr(list), func));
}

module.exports = lisp;