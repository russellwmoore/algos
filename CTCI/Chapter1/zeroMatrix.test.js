const { zeroMatrix } = require('./zeroMatrix');

describe('Zero Matrix', () => {
  const data1 = [[1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]];
  const dataResult1 = zeroMatrix(data1);
  const expected = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 0]];

  const wrong = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1]];

  const small = [[]];

  test('Should return an array', () => {
    expect(Array.isArray(dataResult1)).toBe(true);
  });
  test('Returns an empty for an empty matrix', () => {
    expect(Array.isArray(zeroMatrix(small))).toBe(true);
  });
  test('Returns the correct answer', () => {
    expect(dataResult1).toEqual(expected);
  });

  test('Returns the correct answer', () => {
    expect(dataResult1).not.toEqual(wrong);
  });
});
