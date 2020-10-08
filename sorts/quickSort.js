const quickSort = (arr) => {
  if (arr.length < 2) return arr;
  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      [arr[1], arr[0]] = [arr[0], arr[1]];
    }
    return arr;
  }
  const randomIdx = Math.floor(Math.random() * arr.length);
  const lessThan = arr.filter((num) => num < arr[randomIdx]);
  const moreThan = arr.filter(
    (num, idx) => num >= arr[randomIdx] && idx !== randomIdx
  );
  const pivot = [arr[randomIdx]];
  const sortedLess = quickSort(lessThan);
  const sortedRight = quickSort(moreThan);
  return sortedLess.concat(pivot).concat(sortedRight);
};

module.exports = { quickSort };
