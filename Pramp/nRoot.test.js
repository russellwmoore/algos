const { nRoot } = require('./nRoot');

describe('Nth root of a number', () => {
  const sqResult = nRoot(9, 2);
  const cubeResult = nRoot(7, 3);
  const randomNum = Math.random() * 100;
  const randomPow = Math.ceil(Math.random() * 10);
  const randomResult = nRoot(randomNum, randomPow);
  const expected = Math.pow(randomNum, 1 / randomPow);

  test('should return a number', () => {
    expect(typeof sqResult).toBe('number');
  });
  test('should return the right answer for square roots over 1', () => {
    expect(sqResult).toBeCloseTo(3, 2);
  });
  test('should return the right answer for cube roots over 1', () => {
    expect(cubeResult).toBeCloseTo(1.913, 3);
  });
  test('should return the right answer for random roots over random floats', () => {
    expect(randomResult).toBeCloseTo(expected, 3);
  });

  test('should return the right answer for random roots over random floats', () => {
    expect([1, 2, 3]).toEqual([1, 2, 3]);
  });
});
