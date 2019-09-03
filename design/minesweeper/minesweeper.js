var readlineSync = require('readline-sync');

class Game {
  constructor(w, h) {
    this.totalUnvisitedCells = 0;
    this.grid = this.createGrid(w, h);
    this.gameOver = false;
    this.result = 'You win!';
    this.bombs = 0;
  }

  createGrid(w, h) {
    const grid = [];
    for (let i = 0; i < h; i++) {
      let row = [];
      for (let j = 0; j < w; j++) {
        this.totalUnvisitedCells = this.totalUnvisitedCells + 1;
        row.push('-');
      }
      grid.push(row);
    }

    grid[0][0] = 'B';
    grid[3][4] = 'B';
    grid[4][3] = 'B';
    grid[5][7] = 'B';
    this.bombs = 4;
    return grid;
  }

  bombsAroundCell(row, col, grid) {
    let count = 0;
    if (row > 0) {
      if (grid[row - 1][col - 1] === 'B') count++;
      if (grid[row - 1][col] === 'B') count++;
      if (grid[row - 1][col + 1] === 'B') count++;
    }
    if (row < grid[0].length - 2) {
      if (grid[row + 1][col + 1] === 'B') count++;
      if (grid[row + 1][col] === 'B') count++;
      if (grid[row + 1][col - 1] === 'B') count++;
    }

    if (grid[row][col + 1] === 'B') count++;
    if (grid[row][col - 1] === 'B') count++;
    return count;
  }

  displayGrid() {
    //needs to be the grid a user sees
    if (this.gameOver) {
      console.log('actual\n', this.grid);
    } else {
      const playerView = [];
      for (let i = 0; i < this.grid.length; i++) {
        let row = [];
        for (let j = 0; j < this.grid[0].length; j++) {
          const curr = this.grid[i][j];
          if (curr === 'B') row.push('-');
          else row.push(String(curr));
        }
        playerView.push(row);
      }

      // console.log('actual\n', this.grid);
      console.log(playerView);
    }
  }

  visit(row, col) {
    if (this.grid[row][col] === 'B') {
      this.gameOver = true;
      this.result = 'You Lose!';
    } else {
      const numBombsAroundCell = this.bombsAroundCell(row, col, this.grid);

      if (numBombsAroundCell === 0) {
        this.breadthFirstClearAllZeroes(row, col);
        // expand out by breadth first. always reassign the value to the num of bombs. if the num of bombs is zero, add children to queue
      } else {
        this.grid[row][col] = numBombsAroundCell;
        this.totalUnvisitedCells--;
      }
    }
    this.displayGrid();
  }

  breadthFirstClearAllZeroes(row, col) {
    const queue = [[row, col]];
    while (queue.length) {
      let [row, col] = queue.shift();

      let theseBombs = this.bombsAroundCell(row, col, this.grid);
      this.grid[row][col] = theseBombs;
      if (theseBombs === 0) {
        /*add all neighbors to queue*/
        if (row > 0) {
          if (this.grid[row - 1][col - 1] === '-') {
            queue.push([row - 1, col - 1]);
            // this.totalUnvisitedCells--;
          }

          if (this.grid[row - 1][col] === '-') {
            queue.push([row - 1, col]);
            // this.totalUnvisitedCells--;
          }
          if (this.grid[row - 1][col + 1] === '-') {
            queue.push([row - 1, col + 1]);
            // this.totalUnvisitedCells--;
          }
        }
        if (row < this.grid[0].length - 1) {
          if (this.grid[row + 1][col + 1] === '-') {
            queue.push([row + 1, col + 1]);
            // this.totalUnvisitedCells--;
          }
          if (this.grid[row + 1][col] === '-') {
            queue.push([row + 1, col]);
            // this.totalUnvisitedCells--;
          }
          if (this.grid[row + 1][col - 1] === '-') {
            queue.push([row + 1, col - 1]);
            // this.totalUnvisitedCells--;
          }
        }

        if (this.grid[row][col + 1] === '-') {
          queue.push([row, col + 1]);
          // this.totalUnvisitedCells--;
        }
        if (this.grid[row][col - 1] === '-') {
          queue.push([row, col - 1]);
          // this.totalUnvisitedCells--;
        }
      }
    }
  }

  play() {
    this.displayGrid();
    while (!this.gameOver) {
      // select a point in the grid
      // run function that goes from that point and 'selects all other cells that are not touching
      console.log('unvisited cells', this.totalUnvisitedCells);
      let guess = readlineSync.question(
        'Enter row, then column of cell you to visit: '
      );

      guess = guess.split(' ').map(n => Number(n));
      const [row, col] = guess;
      this.visit(row, col);
    }
    console.log(this.result);
  }
}

let newGame = new Game(10, 10);
newGame.play();

// console.log(newGame.grid);
