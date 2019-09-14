/*
  const string1 = 'charbookcha';
  const string2 = 'bookchachar';
  const string1 = 'cccccccccca';
  const string2 = 'cccccccaccc';
*/

function stringRotation(str1, str2) {
  if (str1.length !== str2.length) return false;
  let idx = str2.length;
  while (idx >= 0 && str2[idx] !== str1[0]) {
    idx--;
  }
  if (idx < 0) return false;
  const str3 = str2 + str2.slice(0, idx);
  return isSubstring(str1, str3);
  // loop backwards through str2 until you find the beginning character at str1. Remember this index
  // take a slice of the second string from 0 to the index and add it on to the end
  // return isSubstring of str1 and new string
}

// provided method
function isSubstring(s1, s2) {
  return s2.indexOf(s1) !== -1;
}

module.exports = { stringRotation };
