var lisp = require('./lisp');


function improve(guess, x) {
	return ((x / guess) + guess) / 2;
}

function goodEnough(guess, x) {
	if(lisp.abs(lisp.square(guess) - x) < 0.001)
		return true;
	else
		return false;
}

function sqrtIter(guess, x) {
	if (goodEnough(guess, x)) return guess;
	else {
		return sqrtIter(improve(guess, x), x);
	}
}

function sqrt(x) {
	return sqrtIter(1.0, x);
}

module.exports = sqrt;