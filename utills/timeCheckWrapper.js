/*
// takes a function, returns a function.
// the returned function returns the time it took 
// for it to run
*/

function timeCheckWrapper(fn) {
  return function(...args) {
    const currentTime = performance.now();
    fn(...args);
    const endTime = performance.now();
    const totalTime = endTime - currentTime;
    return totalTime;
  };
}

function nativeJsSortTime(arr, compare) {
  const currentTime = performance.now();
  arr.sort(compare);
  const endTime = performance.now();
  const totalTime = endTime - currentTime;
  return totalTime;
}

module.exports = { timeCheckWrapper, nativeJsSortTime };
