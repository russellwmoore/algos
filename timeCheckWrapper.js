function timeCheckWrapper(fn) {
  return function(...args) {
    const currentTime = performance.now();
    fn(...args);
    const endTime = performance.now();
    const totalTime = endTime - currentTime;
    return totalTime;
  };
}
module.exports = timeCheckWrapper;
