function iterateArray(array, iterations = 1000, arrayType) {
  console.info(`array type: ${arrayType}`)
  console.time("iterate time");
  let sum = 0;
  for (let j = 0; j < iterations; j++) {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  }
  console.timeEnd("iterate time");
  return sum
}

export { iterateArray };
