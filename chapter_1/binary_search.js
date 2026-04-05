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
    const middle = Math.floor((low + high) / 2);
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

function binarySearchSquareRoot (target) {
  let low = 0;
  let high = target;
  while (low <= high) {
    const middle = Math.floor((low + high) / 2 )
    const number = middle * middle
    if (target === number) {
      return middle
    } else if (number < target) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
}

function binarySearchFirstAndLastOcurrence (array, target) {
  const firstOcurrence = binarySearchFirstOcurrence(array, target);
  const lastOcurrence = binarySearchLastOcurrence(array, target);
  return [firstOcurrence, lastOcurrence]
}
export { binarySearch, binarySearchFirstOcurrence, binarySearchLastOcurrence, binarySearchSquareRoot, binarySearchFirstAndLastOcurrence }