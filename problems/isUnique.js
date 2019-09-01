// String has all unique characters
function isStringUnique(str) {
  if (str.length > 26) return false;
  const chars = {};
  for (let i = 0; i < str.length; i++) {
    const curr = str[i];
    if (curr in chars) return false;
    else chars[curr] = true;
  }
  return true;
}

function isStringUniqueSort(str) {
  let arr = str.split('').sort();
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) return false;
  }
  return true;
}

module.exports = { isStringUnique, isStringUniqueSort };
