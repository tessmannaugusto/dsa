import { sumArrayElements } from "./dc_and_quicksort"

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

describe('divide and conquer', () => {
  it('sumArrayElements', () => {
    const response = sumArrayElements(numberArray)
    expect(response).toEqual(55)
  })
})