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

lisp.cadr = function(list) {
	if (list.length < 2) return null;
	else return list[1];
}

lisp.caddr = function(list) {
	if (list.length < 3) return null;
	else return list[2];
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

lisp.square = function(x) {
	return x * x;
}

lisp.abs = function(x) {
	return x >= 0 ? x : -x;
}

lisp.pow = function(b, n) {
	if (n == 0) return 1;
	if (n % 2 == 0) return lisp.square(lisp.pow(b, n/2));
	else return b * lisp.pow(b, n-1);
}

lisp.random = function(l, r) {
	var num = Math.ceil(Math.random() * r);
	if (num <= r && num >= l) return num;
	else return lisp.num(l, r);
}

lisp.list = function() {
	var args = Array.prototype.slice.call(arguments);
	return args;
}

module.exports = lisp;