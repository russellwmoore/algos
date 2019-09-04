function mergeSort(arr) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return arr;
  let leftArr = mergeSort(arr.slice(0, arr.length / 2));
  let rightArr = mergeSort(arr.slice(arr.length / 2));
  return merge(leftArr, rightArr);
}

function merge(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  let result = [];
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) {
      result.push(arr1[p1]);
      p1++;
    } else {
      result.push(arr2[p2]);
      p2++;
    }
  }

  if (p1 < arr1.length) {
    while (p1 < arr1.length) {
      result.push(arr1[p1]);
      p1++;
    }
  }
  if (p2 < arr2.length) {
    while (p2 < arr2.length) {
      result.push(arr2[p2]);
      p2++;
    }
  }
  return result;
}

module.exports = { merge, mergeSort };
//[4,3,2,1]

let k = [[1, 3, 5, 6, 7], [2, 3], [9, 11, 23, 455], [-10, -4, 0, 12, 45]];

function mergeK(arr) {
  // merge first two
  // merge second 2
  // merge them both
  if (arr.length === 1) return arr[0];

  let left = mergeK(arr.slice(0, arr.length / 2));
  let right = mergeK(arr.slice(arr.length / 2));

  return merge(left, right);
}
