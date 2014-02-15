var lisp = require('./lisp');

var test = function(x, n, m) {
	if (lisp.pow(x, n) % n == m) 
		return true;
	else
		return false;
}

var fastPrime = function(x, time) {
	if (time == 0) return true;
	var n = lisp.random(1, x-1);
	return test(n, x, n) && fastPrime(x, time-1);
}

module.exports = fastPrime;