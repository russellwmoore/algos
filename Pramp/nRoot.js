// 9
// 4.5
// 4.5 * 4.5 bigger or less than 9?
// 2.25 * 2.25

function nRoot(num, root) {
  if (num === 0) return 0;
  let lo = 0;
  let hi = num;
  let guess = (hi + lo) / 2;
  while (guess - lo > 0.0001) {
    if (Math.pow(guess, root) > num) {
      hi = guess;
    } else {
      lo = guess;
    }
    guess = (hi + lo) / 2;
  }
  return guess;
}

module.exports = { nRoot };
