function binarySearch (array, target) {
  let middle;
  let newArray = array;
  while (newArray.length > 0) {
    console.log('processou')
    middle = Math.floor(newArray.length / 2);
    const element = newArray[middle]
    if (element === target) {
      return middle;
    } else if (element > target) {
      newArray = newArray.slice(0, middle)
    } else if (element < target) {
      newArray = newArray.slice(middle + 1, newArray.length)
    }
  }
  return -1
}

export { binarySearch }