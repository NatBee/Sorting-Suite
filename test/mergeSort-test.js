const { assert } = require('chai');
var chai = require("chai"),
expect = chai.expect; // preference and tested with expect 
 
chai.use(require("chai-sorted"));
const mergeSort = require('../lib/mergeSort.js');

describe('mergeSort', function() {

  let randomArray;
  let num;
  let staticArr;
  let letterArr;
  let negNumArr;

  beforeEach( function() {
    negNumArr = [1, 0, -1, -2];
    staticArr = [4, 3, 2, 1];
    letterArr = ['b', 'c', 'd', 'a'];
    randomArray =  [];
    num = 100000;

    for(let i = 0; i < num; i++) {
      randomArray.push(Math.floor(Math.random() * num + 1));
    
    }
  })

  it('should be a function', function() {
    assert.isFunction(mergeSort);
  })

  it('should take an argument', function() {
    mergeSort(randomArray);
    assert.isArray(randomArray, true);
    assert.lengthOf(randomArray, num);
    assert.typeOf(randomArray[0], 'number') 
  })

   it('should be sorted', function() {
    assert.notDeepEqual(mergeSort(staticArr), staticArr)
    const sortedArr = [1, 2, 3, 4];
    assert.deepEqual(mergeSort(staticArr), sortedArr);
   })

   it('should sort letters in an array', function(){
    assert.notDeepEqual(mergeSort(letterArr), letterArr);
    const sortedLetterArr = ['a', 'b', 'c', 'd'];
    assert.deepEqual(mergeSort(letterArr), sortedLetterArr);
  })

  it('should sort negative numbers', function(){
    assert.notDeepEqual(mergeSort(negNumArr), negNumArr);
    const sortedNegNumArr = [-2, -1, 0, 1];
    assert.deepEqual(mergeSort(negNumArr), sortedNegNumArr);
  })

  it('should sort a large random array', function() {
    mergeSort(randomArray);
    assert.equal(randomArray.length, num);
    expect(mergeSort(randomArray)).to.be.sorted();
  })

});
