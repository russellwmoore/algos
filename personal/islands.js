/* eslint-disable complexity */

const island1 = [
  [0, 0, 0, 0, 0, 1, 0, 1, 1, 1],
  [1, 1, 0, 0, 0, 1, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 0, 1, 1, 1],
  [0, 0, 1, 1, 1, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
];

const island2 = [
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const island3 = [
  [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const findArea = matrix => {
  let area = 0;
  let amount = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      // if current cell === 1

      if (matrix[i][j] === 1) {
        amount++;
        let smallArea = calcAreaAndFlipVals(i, j, matrix);
        area = Math.max(smallArea, area);
      }
      // pass this coord in to helper that changes all adjacent 1s to -1s.
      // add to area as each goes by
    }
  }

  return [area, amount, matrix];
};

function findPerimeter(grid) {
  let perimeter = 0;
  for (let row = 0; row < grid.length; ++row) {
    for (let col = 0; col < grid[0].length; ++col) {
      if (grid[row][col] === 1) {
        perimeter += 4 - checkPerimFor1s(grid, row, col);
        //check all adjacent sides for 1, add 1 for each non-1 found
      }
    }
  }

  return perimeter;
}

function checkPerimFor1s(grid, row, col) {
  let sum = 0;
  if (row > 0 && grid[row - 1][col] === 1) ++sum;
  if (row < grid.length - 1 && grid[row + 1][col] === 1) ++sum;
  if (col > 0 && grid[row][col - 1] === 1) ++sum;
  if (col < grid[0].length - 1 && grid[row][col + 1] === 1) ++sum;

  return sum;
}

// eslint-disable-next-line complexity
function calcAreaAndFlipVals(row, col, matrix) {
  let area = 0;
  const queue = [[row, col]];

  while (queue.length) {
    const [row, col] = queue.shift();

    if (matrix[row][col] === 1) {
      area++;
      matrix[row][col] = 2;
      if (row > 0) {
        if (matrix[row - 1][col] === 1) queue.push([row - 1, col]);
      }
      if (row < matrix.length - 1) {
        if (matrix[row + 1][col] === 1) queue.push([row + 1, col]);
      }

      if (matrix[row][col - 1] === 1) queue.push([row, col - 1]);
      if (matrix[row][col + 1] === 1) queue.push([row, col + 1]);
    }
  }
  return area;
}
// console.log(findArea(island1));
console.log(findPerimeter(island3));
