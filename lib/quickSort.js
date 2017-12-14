function quickSort(array) {
  
  if (array.length < 2) {
    return array;
  }
  
  let pivot = array.pop();
  let left = [];
  let right = [];

  array.forEach((val) => {
    
    if ( pivot > val ) {
      left.push(val);
    } else {
      right.push(val);
    }
  })

  return [...quickSort(left), pivot, ...quickSort(right)]

}

module.exports = quickSort;