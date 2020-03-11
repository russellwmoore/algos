const { shift } = require('./shiftArrInPlace');

describe('Shift', () => {
  test('It returns an array', () => {
    const data = [1, 2, 4, 5, 6, 7, 8, 9, 10];
    const result = shift(data, 1);

    expect(Array.isArray(result)).toBe(true);
  });

  test('It returns an array shifted by one', () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = shift(data, 1);

    expect(result).toEqual([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('It returns an array shifted by 9', () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = shift(data, 9);

    expect(result).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 1]);
  });
});
