const { preProcess } = require('./preProcessSum');
const { timeCheckWrapper } = require('../timeCheckWrapper');

describe('Sum PreProcessing', () => {
  test('Returns a number', () => {
    const summer = preProcess([1, 2, 3, 4, 5]);
    expect(typeof summer(1, 3)).toBe('number');
  });

  test('Returns a the correct sum', () => {
    const summer = preProcess([1, 2, 3, 4, 5]);
    expect(summer(1, 3)).toBe(5);
  });
  test('Returns a the correct with negative nums', () => {
    const summer = preProcess([-19, 3, -5, 2, 0]);
    expect(summer(1, 3)).toBe(-2);
  });

  test('Gets the same answer as a normal loops sum', () => {
    let arr = Array(1000)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 100) + n);
    let summer = preProcess(arr);
    const summerResult = summer(0, 1000);
    const sumLoopResult = arr.reduce((a, b) => a + b);
    expect(summerResult).toBe(sumLoopResult);
  });

  test('Is preprocessing is faster than finding the sum with normal loops', () => {
    const arr = Array(1000)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 100) + n);

    const summer = preProcess(arr);
    const summerTimer = timeCheckWrapper(summer);
    const preProcessSum = summerTimer(0, 1000);

    const loopSummer = (arr, begin, end) => {
      let sum = 0;
      for (let i = begin; i < end; i++) {
        sum += arr[i];
      }
      return sum;
    };
    const loopSummerTimer = timeCheckWrapper(loopSummer);
    const loopSummerTime = loopSummerTimer(arr, 0, 1000);
    expect(preProcessSum).toBeLessThan(loopSummerTime);
    preProcessSum < loopSummerTime
      ? console.log(
          `Snap! you ${
            preProcessSum / loopSummerTime
          } times faster than a regular loop`
        )
      : console.log(
          `Ooops, you need to be faster than a loop. You are ${
            loopSummerTime / preProcessSum
          } times slower than a loop`
        );
  });
});
