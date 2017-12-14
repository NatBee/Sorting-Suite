const { assert } = require('chai');
const insertionSort = require('../lib/insertionSort.js');

describe('insertionSort', function() {

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
    num = 12000;

    for(let i = 0; i < num; i++) {
      randomArray.push(Math.floor(Math.random() * num + 1));
    
    }
  })

  it('should be a function', function() {
    assert.isFunction(insertionSort);
  })

   it('should take an argument', function() {
    insertionSort(randomArray);
    assert.isArray(randomArray, true);
    assert.lengthOf(randomArray, num);
    assert.typeOf(randomArray[0], 'number') 
  })

   it('should be unsorted at first', function() {
    assert.equal(staticArr[0], 4);
    assert.equal(staticArr[1], 3);
    assert.equal(staticArr[2], 2);
    assert.equal(staticArr[3], 1);

    insertionSort(staticArr);

    assert.equal(staticArr[0], 1);
    assert.equal(staticArr[1], 2);
    assert.equal(staticArr[2], 3);
    assert.equal(staticArr[3], 4);
   })

   it('should sort letters in an array', function(){
    assert.equal(letterArr[0], 'b');
    assert.equal(letterArr[1], 'c');
    assert.equal(letterArr[2], 'd');
    assert.equal(letterArr[3], 'a');

    insertionSort(letterArr);

    assert.equal(letterArr[0], 'a');
    assert.equal(letterArr[1], 'b');
    assert.equal(letterArr[2], 'c');
    assert.equal(letterArr[3], 'd');
  })

  it('should sort negative numbers', function(){
    assert.equal(negNumArr[0], 1)
    assert.equal(negNumArr[1], 0)
    assert.equal(negNumArr[2], -1)
    assert.equal(negNumArr[3], -2)

    insertionSort(negNumArr);

    assert.equal(negNumArr[0], -2)
    assert.equal(negNumArr[1], -1)
    assert.equal(negNumArr[2], 0)
    assert.equal(negNumArr[3], 1)
  })

  it('should sort a large random array', function() {
    insertionSort(randomArray);
    assert.equal(randomArray.length, num);
  })

});
