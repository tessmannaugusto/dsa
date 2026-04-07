import { findBiggestNumberRecursive, getBiggestEqualSquareSubtraction, getBiggestEqualSquareModule, sumArrayElements, sumElementsRecursive, countElementsInArrayRecursive } from "./dc_and_quicksort"

const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

describe('divide and conquer', () => {
  it('should sum all array elements with sumArrayElements', () => {
    const response = sumArrayElements(numberArray)
    expect(response).toEqual(55)
  })
  it('should sum all array elements one by one', () => {
    const response = sumElementsRecursive(numberArray)
    expect(response).toEqual(55)
  })
  it('should count all array elements one by one', () => {
    const response = countElementsInArrayRecursive(numberArray)
    expect(response).toEqual(11)
  })

  it('should return biggest number in array', () => {
    const response = findBiggestNumberRecursive(numberArray);
    expect(response).toEqual(10)
  })
  it('should get biggest equal square size from area - module', () => {
    const response = getBiggestEqualSquareModule(1680, 640);
    expect(response).toEqual(80)
  })
  it('should get biggest equal square size from area - subtraction and if', () => {
    const response = getBiggestEqualSquareSubtraction(1680, 640);
    expect(response).toEqual(80)
  })
})