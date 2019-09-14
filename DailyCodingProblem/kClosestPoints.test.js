const { kClosestPoints } = require('./kClosestPoints');

describe('K Closest Points', () => {
  const list = [[0, 0], [5, 4], [3, 1]];
  const central = [1, 2];
  const k = 2;
  const result = [[0, 0], [3, 1]];
  test('should be a function', () => {
    expect(typeof kClosestPoints).toBe('function');
  });
  test('should return an array', () => {
    expect(Array.isArray(kClosestPoints(list, central, k))).toBe(true);
  });
  test('should find k closest points', () => {
    expect(kClosestPoints(list, central, k)).toEqual(result);
  });
});
