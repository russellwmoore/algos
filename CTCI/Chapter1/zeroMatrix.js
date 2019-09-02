// m x n matrix. If you find a zero, that row is all
// zeros, and all colums are zeros

// [
// [1,1,1,1,1,0],
// [0,1,1,1,1,1],
// [1,1,1,1,1,1],
// ]

// [
// [0,0,0,0,0,0],
// [0,0,0,0,0,0],
// [0,1,1,1,1,1],
// ]

// find all indexes of zeros,
// if you find on, all in the row are zeros
// rebuild matix using information from zero finds
// every row should be zeros for each [r,c] you find
//

function zeroMatrix(matrix) {
  let zeros = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const cur = matrix[i][j];
      if (cur === 0) zeros.push([i, j]);
    }
  }

  zeros.forEach(([row, col]) => {
    transform(row, col, matrix);
  });

  return matrix;
}

function transform(row, col, matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === row || j === col) {
        matrix[i][j] = 0;
      }
    }
  }
}

// const data = [[1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]];

// console.log(zeroMatrix(data));

module.exports = { zeroMatrix };
