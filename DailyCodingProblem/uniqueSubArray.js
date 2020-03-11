// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// Given an array of elements, return the length of the longest subarray where all its elements are distinct.

// For example, given the array , return 5 as the longest subarray of distinct elements is

// [1, 2, 3, 4, 3];
function subArray(arr) {
  let map = {};
  let start = 0;
  let maxLen = 0;

  for (i = 0; i < arr.length; i++) {
    console.log('***********', map);
    let current = map[arr[i]];
    if (current != null && start <= current) {
      start = current + 1;
    } else {
      maxLen = Math.max(maxLen, i - start + 1);
    }

    map[arr[i]] = i;
  }

  return maxLen;
}

module.exports = { subArray };
