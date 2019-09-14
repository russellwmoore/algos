function palindromePermutation(str) {
  if (!str.length) return true;
  str = str.toLowerCase();
  const frequency = {};
  for (let i in str) {
    if (str[i] === ' ') continue;
    if (str[i] in frequency) frequency[str[i]]++;
    else frequency[str[i]] = 1;
  }
  const oddOccurances = Object.values(frequency).filter(num => num % 2 === 1);
  return oddOccurances.length <= 1;
}

module.exports = { palindromePermutation };
