function mergeSort(array) {
  
  if (array.length === 1) {
    return array;
  }

  let mid = Math.floor(array.length/2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  
  let container = [];

  while (left.length || right.length) {
    
    if (left[0] > right[0] || left[0] === undefined) {
      container.push(right.shift());
    } else {
      container.push(left.shift());
    }
  }
  
  return container;
}

module.exports = mergeSort; 