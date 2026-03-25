function binarySearch (array, target) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    const middle = Math.floor((low + high) / 2)
    if (array[middle] === target) {
      return middle;
    } else if (array[middle] > target) {
      high = middle -1
    } else {
      low = middle + 1
    }
  }
  return -1
}

function binarySearchFirstOcurrence (array, target) {
  let low = 0;
  let high = array.length -1;
  let result = -1;
  while (low <= high) {
    const middle = ((low + high) / 2);
    const guess = array[middle];
    if (guess === target) {
      result = middle;
      high = middle - 1;
    } else if (guess > target) {
      high = middle - 1;
    } else {
      low = middle + 1
    }
  }
  return result;
}

function binarySearchLastOcurrence (array, target) {
  let low = 0;
  let high = array.length - 1;
  let result = -1;
  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    const guess = array[middle];
    if (guess === target) {
      result = middle;
      low = middle + 1;
    } else if (guess > target) {
      high = middle - 1;
    } else {
      low = middle + 1
    }
  }
  return result;
}
export { binarySearch, binarySearchFirstOcurrence, binarySearchLastOcurrence }