// This problem was asked by Flexport.

// Given a string s, rearrange the characters so that any two adjacent characters are not the same. If this is not possible, return null.

// For example, if s = yyz then return yzy. If s = yyy then return null.

function reArrange(str) {
  if (str.length === 1) return str;
  const freqs = {};

  let max = -Infinity;

  for (const char of str) {
    if (char in freqs) {
      freqs[char]++;
    } else {
      freqs[char] = 1;
    }
    max = Math.max(freqs[char], max);
  }

  const result = Array(str.length).fill();
  console.log(result);
  
}

reArrange('russell');
