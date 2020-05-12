function preProcess(nums) {
  const store = {};

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      let tempSum = nums.slice(i, j).reduce((a, b) => a + b, 0);
      if (store[i] === undefined) {
        store[i] = {};
      }
      store[i][j] = tempSum;
    }
  }

  return function sum(beginIdx, endIdx) {
    return store[beginIdx][endIdx];
  };
}

module.exports = { preProcess };
