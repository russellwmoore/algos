const { paths } = require('./matrixPaths');

describe('Paths in a matrix', () => {
  const matrix1 = [[0, 0, 1], [0, 0, 1], [1, 0, 0]];
  const result = paths(matrix1);
  const matrix2 = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
  test('should return a number', () => {
    expect(typeof result).toBe('number');
  });

  test('should give the correct answer for no paths available', () => {
    expect(paths(matrix2)).toBe(-1);
  });

  test('should give the correct answer for 2 paths', () => {
    expect(result).toBe(2);
  });
});
