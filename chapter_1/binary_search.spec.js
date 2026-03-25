import { binarySearch } from "./binary_search";

const mockArray = [1, 3, 5, 7, 9]

describe('binary search tests', () => {
  it('should find result in slot 1', () => {
    const result = binarySearch(mockArray, 3);
    expect(result).toEqual(1)
  })
  it('should return -1 when result is not found', () => {
    const result = binarySearch(mockArray, 4);
    expect(result).toEqual(-1)
  })
})
