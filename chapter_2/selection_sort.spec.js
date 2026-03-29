import { searchSmaller, selectionSort } from "./selection_sort";

const numberArray = [2, 3, 5, 7, 1, 2, 3, 5, 6, 7, 6, 5, 3]

describe('selection sort algorithyms', () => {
  it('should order number by smaller', () => {
    const sortedArray = selectionSort(numberArray, searchSmaller);
    expect(sortedArray).toEqual([1, 2, 2, 3, 3, 3, 5, 5, 5, 6, 6, 7, 7])
  }) 
})