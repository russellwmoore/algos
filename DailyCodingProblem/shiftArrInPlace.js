function shift(arr, num) {
  if (num > arr.length) throw 'Shift must be smaller than array length';
  arr.reverse();
  reverse(arr, num, arr.length - 1);
  reverse(arr, 0, num - 1);
  return arr;
}

function reverse(arr, beginIdx, endIdx) {
  while (beginIdx <= endIdx) {
    let temp = arr[beginIdx];
    arr[beginIdx] = arr[endIdx];
    arr[endIdx] = temp;
    beginIdx++;
    endIdx--;
  }
}

module.exports = { shift };
