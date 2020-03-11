const seeIt = s => {
  if (s < 0) throw new Error('Must be positive');
  if (s === 0) return '1';
  let result = ['1'];
  let accum = [];

  while (s > 0) {
    let count = 0;
    for (let i = 0; i < result.length; ) {
      const current = result[i]; //
      while (current === result[i]) {
        count++;
        i++;
      }
      accum.push(String(count), current);
      count = 0;
    }
    result = accum;
    accum = [];
    s--;
  }
  return result.join('');
  // loop through result
  // grab first character.
  // count all to the right of character
  // add character and count to subresult
  //
};

console.log(seeIt(0));
console.log(seeIt(1));
console.log(seeIt(2));
console.log(seeIt(3));
console.log(seeIt(4));
console.log(seeIt(5));
console.log(seeIt(6));
console.log(seeIt(7));
// 1
// 11
// 21
// 1211
// 111221
