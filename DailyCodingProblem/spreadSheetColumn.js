/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Dropbox.

Spreadsheets often use this alphabetical encoding for its columns: "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", ....

Given a column number, return its alphabetical column id. For example, given 1, return "A". Given 27, return "AA".
*/

const ssColumn = num => {
  let string = "";
  while (num > 26) {
    let code = num % 26;
    let capLetter = String.fromCharCode(code + 64);
    string += capLetter;
    num -= 26;
  }
  string += String.fromCharCode(num + 64);
  return string;
};

module.exports = { ssColumn };
