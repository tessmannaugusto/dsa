import {
  binarySearch,
  binarySearchFirstOcurrence,
  binarySearchLastOcurrence,
  binarySearchSquareRoot,
  binarySearchFirstAndLastOcurrence
} from "./binary_search";

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

describe("binary search square root", () => {
  it("should return valid square root", () => {
    const result = binarySearchSquareRoot(100);
    expect(result).toEqual(10);
  });
  it("should return valid square root 2", () => {
    const result = binarySearchSquareRoot(16);
    expect(result).toEqual(4);
  });
});

describe("binary search first and last ocurrence", () => {
  it("should return valid square root", () => {
    const result = binarySearchFirstAndLastOcurrence(mockArrayMultiOcurrences, 2);
    expect(result).toEqual([1, 3]);
  });
  it("should not find last and first ocurrence", () => {
    const result = binarySearchFirstAndLastOcurrence(mockArrayMultiOcurrences, 16);
    expect(result).toEqual([-1, -1]);
  });
});
