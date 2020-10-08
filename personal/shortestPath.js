function shortestPath(grid, startR, startC, endR, endC) {
  let startNode = { row: startR, col: startC, depth: 0 };
  grid[startR][startC] = startNode;
  let queue = [startNode];
  while (queue.length) {
    const { row, col, depth } = queue.shift();
    if (row === endR && col === endC) {
      return depth;
    }

    const ns = getNeighbors(grid, row, col);
    for (let i = 0; i < ns.length; i++) {
      const [nRow, nCol] = ns[i];
      const gridNode = grid[nRow][nCol];
      if (gridNode === 1) continue;

      if (gridNode === 0) {
        let node = { row: nRow, col: nCol, depth: depth + 1 };
        grid[nRow][nCol] = node;
        queue.push(node);
      }
    }
    // ns will be either nums (if we haven't visited)
    // or they will be objects with depth
    // if they are numbers, replace them on grid with r/c/depth object, add to queue
    // if they are objects compare with current depth
    // if the current depth + 1 is less than the depth in the object, update the grid with the lower depth, add to queue
    // if the current depth + 1 is more than the depth in the object, do not update, do not add to queue
  }
  // keep map of each distance or depth so far
  // bfs from start to end
  // if the current node is the end, return the depth
  return -1;
}

// eslint-disable-next-line complexity
function getNeighbors(grid, row, col) {
  const neighbors = [];
  if (row > 0) {
    if (grid[row - 1][col] !== 1) neighbors.push([row - 1, col]);
  }
  if (row < grid.length - 1) {
    if (grid[row + 1][col] !== 1) neighbors.push([row + 1, col]);
  }
  if (col < grid[0].length - 1) {
    if (grid[row][col + 1] !== 1) neighbors.push([row, col + 1]);
  }
  if (col > 0) {
    if (grid[row][col - 1] !== 1) neighbors.push([row, col - 1]);
  }
  return neighbors;
}

// shortestPath(grid, 0, 0, 2, 2);
module.exports = { shortestPath };
