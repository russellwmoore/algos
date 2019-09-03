const { mergeSort, merge } = require('./mergeSort');

function bigArr(len) {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(Math.floor(Math.random() * len));
  }
  return arr;
}

describe('It runs a test', () => {
  const arr = [5, 4, 3, 2, 1];
  const result = [1, 2, 3, 4, 5];

  let random = Math.floor(Math.random() * 1000);
  let randomArr = bigArr(random);

  test('should return an empty array ', () => {
    expect(mergeSort([])).toEqual([]);
  });

  test('should work on zeroes', () => {
    expect(mergeSort([0, 0, 0, 0, 0])).toEqual([0, 0, 0, 0, 0]);
  });

  test('should sort arrays', () => {
    expect(mergeSort(arr)).toEqual(result);
  });

  test(`It sorts big arrays of ${random} length`, () => {
    expect(mergeSort(randomArr)).toEqual(randomArr.sort((a, b) => a - b));
  });
});
