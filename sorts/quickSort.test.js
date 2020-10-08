const { quickSort } = require('./quickSort');
const { createArrayOfInts } = require('../utills/createArrayOfInts');

describe('Quick Sort', () => {
  const data = [4, 5, 3, 1];
  test('Should return an array', () => {
    expect(Array.isArray(quickSort(data))).toBe(true);
    expect(Array.isArray(quickSort([]))).toBe(true);
  });

  test('Should sort a small basecase arr', () => {
    expect(quickSort([2])).toEqual([2]);
    expect(quickSort([2, 1])).toEqual([1, 2]);
    expect(quickSort([0, 10])).toEqual([0, 10]);
    expect(quickSort([])).toEqual([]);
  });

  test('Should sort a larger arr', () => {
    expect(quickSort([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ]);
    expect(quickSort([2, 1])).toEqual([1, 2]);
    expect(quickSort([0, 10])).toEqual([0, 10]);
    expect(quickSort([])).toEqual([]);
  });

  test('Should sort a larger random arr', () => {
    const arrOfInts1 = createArrayOfInts(100, 0, 1000);
    const arrOfInts2 = createArrayOfInts(1000, -1000, 1000);

    expect(quickSort(arrOfInts1)).toEqual(arrOfInts1.sort((a, b) => a - b));
    expect(quickSort(arrOfInts2)).toEqual(arrOfInts2.sort((a, b) => a - b));
  });
});
