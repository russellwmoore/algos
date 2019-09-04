const { mergeSort } = require('./mergeSort');
const { timeCheckWrapper, nativeJsSortTime } = require('../timeCheckWrapper');
const chalk = require('chalk');

function bigArr(len) {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(Math.floor(Math.random() * len));
  }
  return arr;
}

describe('Merge Sort', () => {
  const arr = [5, 4, 3, 2, 1];
  const result = [1, 2, 3, 4, 5];

  let random = Math.floor(Math.random() * 1000);
  let randomArr = bigArr(random);

  let yugeArray = bigArr(10000);

  let timedMergeSort = timeCheckWrapper(mergeSort);

  test('should return an empty array when passed an empty array', () => {
    expect(mergeSort([])).toEqual([]);
  });

  test('should work on zeroes', () => {
    expect(mergeSort([0, 0, 0, 0, 0])).toEqual([0, 0, 0, 0, 0]);
  });

  test('should work on negatives', () => {
    expect(mergeSort([10, -10, 2, -5, 1])).toEqual([-10, -5, 1, 2, 10]);
  });

  test('should sort arrays', () => {
    expect(mergeSort(arr)).toEqual(result);
  });

  test(`It sorts big arrays of ${random} length`, () => {
    expect(mergeSort(randomArr)).toEqual(randomArr.sort((a, b) => a - b));
  });

  const yourTime = timedMergeSort(yugeArray);
  const jsTime = nativeJsSortTime(yugeArray, (a, b) => a - b);
  console.log(
    chalk.blue(
      `Performance vs JS Native sort of array length ${yugeArray.length} \nYour mergesort time: ${yourTime}\nJS Native sort time ${jsTime}`
    )
  );
});
