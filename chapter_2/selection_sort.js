function searchSmaller (array) {
  let smaller = array[0];
  let smallerIndex = 0;
  for(let i = 0; i < array.length; i++) {
    if (array[i] < smaller){
      smaller = array[i];
      smallerIndex = i;
    }
  }
  return smallerIndex;
}

function selectionSort (array, func) {
  let newArr = [];
  while (array.length > 0) {
    const smallerIndex = func(array);
    newArr.push(array.splice(smallerIndex, 1)[0])
  }
  return newArr;
}

export { selectionSort, searchSmaller }