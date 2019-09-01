// aabbbbbc => a2b4c1 if this str is shorter than the original
//
function stringCompression(str) {
  let abbrev = [];
  let count = 1;
  let char = '';
  for (let i = 0; i < str.length; i++) {
    if (i !== str.length - 1) {
      char = str[i];
      let next = str[i + 1];
      if (char === next) {
        count++;
      } else {
        abbrev.push(`${char}${String(count)}`);
        count = 1;
      }
    } else {
      if (char === str[i]) {
        abbrev.push(`${char}${String(count)}`);
      } else {
        abbrev.push(`${str[i]}1`);
      }
    }
  }
  abbrev = abbrev.join('');
  return str.length < abbrev.length ? str : abbrev;
}

module.exports = { stringCompression };
