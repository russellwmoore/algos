// Given two strings, write a method to decide if one is a permutation of the other
function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) return false;
  if (str1 === str2) return true;
  let letters = {};
  for (let i in str1) {
    if (str1[i] in letters) letters[str1[i]]++;
    else letters[str1[i]] = 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let curr = str2[i];
    if (curr in letters) {
      letters[curr]--;
      if (letters[curr] < 0) return false;
    } else return false;
  }
  return true;
}

checkPermutation('russell', 'lessurr');

function checkPermutationSort(str1, str2) {
  if (str1.length !== str2.length) return false;
  if (str1 === str2) return true;
  const string1 = str1
    .split('')
    .sort()
    .join('');
  const string2 = str2
    .split('')
    .sort()
    .join('');
  return string1 === string2;
}

module.exports = { checkPermutation, checkPermutationSort };
