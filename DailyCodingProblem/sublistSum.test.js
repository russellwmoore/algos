const { summer, summs } = require('./sublistSum');
const { timeCheckWrapper } = require('../timeCheckWrapper');

describe('Test', () => {
  const data = [1, 2, 3, 4, 5];
  const data2 = [];
  for (let i = 1; i <= 1000; i++) {
    data2.push(i);
  }
  const bigSum = summer(data2);
  const sum = summer(data);
  const summsTime = timeCheckWrapper(summs);
  const sumTime = timeCheckWrapper(bigSum);

  test('should return a number', () => {
    expect(typeof sum(0, 4)).toBe('number');
  });
  test('should return the correct sum', () => {
    expect(sum(0, 4)).toBe(15);
  });

  const nonOptTime = summsTime(data2, 0, 1000);
  const optTime = sumTime(0, 1000);

  if (optTime < nonOptTime) {
    console.log(
      `Yess! Optimized is ${nonOptTime /
        optTime} times faster than non-optimized`
    );
  }
});
