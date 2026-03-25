import { binarySearch, binarySearchFirstOcurrence, binarySearchLastOcurrence } from "./binary_search";

const mockArray = [1, 3, 5, 7, 9];
const mockArrayMultiOcurrences = [1, 2, 2, 2, 3, 5, 7, 9];

describe("binary search tests", () => {
  it("should find result in slot 1", () => {
    const result = binarySearch(mockArray, 3);
    expect(result).toEqual(1);
  });
  it("should return -1 when result is not found", () => {
    const result = binarySearch(mockArray, 4);
    expect(result).toEqual(-1);
  });
});

describe("binary search first occurrence tests", () => {
  it("should find result in position 1", () => {
    const result = binarySearchFirstOcurrence(mockArrayMultiOcurrences, 2);
    expect(result).toEqual(1);
  });
  it("should return -1 when result is not found", () => {
    const result = binarySearchFirstOcurrence(mockArrayMultiOcurrences, 4);
    expect(result).toEqual(-1);
  });
});

describe("binary search last occurrence tests", () => {
  it("should find result in position 1", () => {
    const result = binarySearchLastOcurrence(mockArrayMultiOcurrences, 2);
    expect(result).toEqual(3);
  });
  it("should return -1 when result is not found", () => {
    const result = binarySearchLastOcurrence(mockArrayMultiOcurrences, 4);
    expect(result).toEqual(-1);
  });
});
