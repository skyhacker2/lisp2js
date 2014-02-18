var lisp = require('../lib/lisp');
var expect = require('expect.js');
var sqrt = require('../lib/sqrt');
var tree = require('../lib/tree');
var arr = [1, 2, 3, 4];
describe('lisp.js', function(){
  	describe('#car', function(){
    	it('should return first item', function(){
    		expect(lisp.car(arr)).to.be(1);
    	});
  	});
  	describe('#cdr', function() {
  		it('should return others of list', function() {
    		expect(lisp.cdr(arr)).to.be.eql([2, 3, 4]);
    		expect(arr).to.be.eql([1,2,3,4]);
    	});
  	});
  	describe('#cons', function() {
  		it('should construct a list', function() {
  			var a  = 0;
  			expect(lisp.cons(a, arr)).to.be.eql([0,1,2,3,4]);
  			var b = [0, -1];
  			expect(lisp.cons(b, arr)).to.be.eql([[0, -1], 1, 2, 3, 4]);
  			expect(arr).to.be.eql([1,2,3,4]);
  		});
  	});
  	describe('#append', function() {
  		it('should create a new list and append list2, list1 to the new list', function() {
  			var list1 = [1, 2];
  			var list2 = [3, 4];
  			expect(lisp.append(list1, list2)).to.be.eql([1,2,3,4]);
  			expect(list1).to.be.eql([1,2]);
  			expect(list2).to.be.eql([3,4]);
  		});
  	});
  	describe('#map', function() {
  		it('should map each item and add one', function() {
  			var l1 = lisp.map(arr, function(item) {
  				item += 1;
  				return item;
  			});
  			expect(l1).to.be.eql([2,3,4,5]);
  		});
  		it('should filter odds from arr', function() {
  			var l1 = lisp.map(arr, function(item) {
  				if (item % 2 != 0)
  					return item;
  				else
  					return null;
  			});
  			expect(l1).to.be.eql([1,3]);
  		});
  	});
    describe('#cadr', function() {
      it('should return 2 when cadr([1,2,3,4])', function() {
        var arr = [1, 2, 3, 4];
        expect(lisp.cadr(arr)).to.be.eql(2);
      });
    });
    describe('#caddr', function() {
      it('should return 3 when caddr([1,2,3,4])', function() {
        var arr = [1, 2, 3, 4];
        expect(lisp.caddr(arr)).to.be.eql(3);
      });
    });
    describe('#list', function() {
      it('should return [1,2,3,4] when list(1,2,3,4)', function() {
        expect(lisp.list(1,2,3,4)).to.be.eql([1,2,3,4]);
        expect(lisp.list(1,2,3,4).length).to.be.eql(4);
      });
    });
});
describe('sqrt.js', function() {
	describe('#sqrt', function() {
		it('should be 2 when sqrt(4)', function() {
			var s = sqrt(4);
			expect(Math.abs(s-2)).to.be.lessThan(0.001);
		});
		it('should be sqrt(5)', function() {
			var s = sqrt(5);
			expect(Math.abs(Math.pow(s,2)-5)).to.be.lessThan(0.001);
		});
	});
});