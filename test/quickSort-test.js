const { assert } = require('chai');
var chai = require("chai"),
    expect = chai.expect; // preference and tested with expect 
 
chai.use(require("chai-sorted"));

const quickSort = require('../lib/quickSort.js');

describe('quickSort', function() {

  let randomArray;
  let num;

  beforeEach( function() {
    randomArray =  [];
    num = 770000;

    for(let i = 0; i < num; i++) {
      randomArray.push(Math.floor(Math.random() * num + 1));
    
    }
  })

  it('should be a function', function() {
    assert.isFunction(quickSort);
  })

  it('should take an argument', function() {
    quickSort(randomArray);
    assert.isArray(randomArray, true);
    assert.typeOf(randomArray[0], 'number') 
  })

   it('should sort an array', function() {
    assert.deepEqual(quickSort([3, 2, 1, 4]), [1, 2, 3, 4]);
   })

   it('should sort letters in an array', function(){
    assert.deepEqual(quickSort(['c', 'd', 'a', 'b']), ['a', 'b', 'c', 'd']);
  })

  it('should sort negative numbers', function(){
    assert.deepEqual(quickSort([5, -1, 0, 12, -5]), [-5, -1, 0, 5, 12]);
  })

  it('should sort a large random array', function() {
    expect(quickSort(randomArray)).to.be.sorted();
  })

});
