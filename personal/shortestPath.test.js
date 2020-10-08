const { shortestPath } = require('./shortestPath.js');

describe('Shortest Path', () => {
  const smallGrid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  const smallGrid2 = [
    [0, 1, 0],
    [1, 1, 0],
    [0, 0, 0],
  ];
  const smallGrid3 = [
    [0, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ];

  const medGrid1 = [
    [0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 1, 0],
  ];
  test('should be a function', () => {
    expect(typeof shortestPath === 'function').toBe(true);
  });
  test('should return an integer', () => {
    expect(typeof shortestPath([[]], 0, 0, 0, 0) === 'number').toBe(true);
  });
  test('should return the right answer for a small grid', () => {
    expect(shortestPath(smallGrid, 0, 0, 2, 2)).toBe(4);
    expect(shortestPath(smallGrid2, 0, 0, 2, 2)).toBe(-1);
    expect(shortestPath(smallGrid3, 0, 0, 3, 3)).toBe(6);
    expect(shortestPath(medGrid1, 0, 0, 7, 7)).toBe(28);
  });
});
