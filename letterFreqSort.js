const letterFreqSort = str => {
  const freqs = {};

  for (let i = 0; i < str.length; ++i) {
    if (str[i] in freqs) freqs[str[i]]++;
    else freqs[str[i]] = 1;
  }

  return Object.keys(freqs).sort((a, b) => {
    a = freqs[a];
    b = freqs[b];
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
};

module.exports = { letterFreqSort };
