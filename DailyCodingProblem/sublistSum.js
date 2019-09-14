/*
Given a list of numbers L, implement a method sum(i, j) which returns the sum from the sublist L[i:j] (including i, including j).

For example, given L = [1, 2, 3, 4, 5], sum(1, 3) should return 2 + 3 + 4, which is 9.

You can assume that you can do some pre-processing. sum() should be optimized over the pre-processing step.

*/

function summer(list) {
  const trie = {};
  for (let i = 0; i < list.length; i++) {
    trie[i] = {};
    let count = 0;
    for (let j = i; j < list.length; j++) {
      let sum = list.slice(i, j + 1).reduce((a, b) => a + b, 0);
      count += list[j];
      trie[i][j] = count;
    }
  } // [1,2,3,4,5]
  return (begin, end) => {
    return trie[begin][end];
  };
}

function summs(arr, begin, end) {
  return arr.slice(begin, end).reduce((a, b) => a + b);
}
const data = [1, 2, 3, 4, 5];

const sum = summer(data);

sum(0, 4);
module.exports = { summer, summs };
