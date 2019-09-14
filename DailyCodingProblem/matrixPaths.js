/*

You are given an N by M matrix of 0s and 1s. Starting from the top left corner, how many ways are there to reach the bottom right corner?

You can only move right and down. 0 represents an empty space while 1 represents a wall you cannot walk through.

For example, given the following matrix:

[[0, 0, 1],
 [0, 0, 1],
 [1, 0, 0]]
Return two, as there are only two ways to get to the bottom right:

Right, down, down, right
Down, right, down, right
The top left corner and bottom right corner will always be 0.
*/

const paths = matrix => {
  const copy = makeCopy(matrix);
  // console.table(copy);
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      let sum = 0;
      if (copy[row][col] === 'x') continue;
      if (copy[row - 1][col] !== 'x') sum += copy[row - 1][col];
      if (copy[row][col - 1] !== 'x') sum += copy[row][col - 1];
      copy[row][col] = sum;
    }
  }
  const result = copy[matrix.length - 1][matrix[0].length - 1];
  // console.table(copy);
  return result === 'x' ? -1 : result;
};

const makeCopy = matrix => {
  const copy = [];
  for (let row = 0; row < matrix.length; row++) {
    let rowCopy = [];
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 1) rowCopy.push('x');
      else if (row === 0) rowCopy.push(1);
      else if (col === 0) rowCopy.push(1);
      else rowCopy.push(0);
    }
    copy.push(rowCopy);
  }
  return copy;
};

// paths(data);

module.exports = { paths };
