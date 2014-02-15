var lisp = require('./lisp');
var sqrt = require('./sqrt');

// 求x的最小因子l
var smallestDivisor = function(x) {
	return findDivisor(x, 2);
}

var findDivisor = function(x, n) {
	if (sqrt(n) > x) return x;
	else if (x % n == 0) return n;
	else return findDivisor(x, n+1);
}

var prime = function(x) {
	return smallestDivisor(x, 2) == x;
}


module.exports = prime;