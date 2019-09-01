const { isStringUnique, isStringUniqueSort } = require('./isUnique');

function makeBigString(num) {
  const letters = [];
  for (let i = 0; i < num; i++) {
    let charCode = Math.floor(Math.random() * 26) + 97;
    letters.push(String.fromCharCode(charCode));
  }
  return letters.join('');
}

describe('Is Unique', () => {
  const testString = makeBigString(27);
  let uniques = isStringUnique(testString);
  it('Should return false if string is over 26 characters', () => {
    expect(uniques).toEqual(false);
  });
  it('Should return true for an empty string', () => {
    expect(isStringUnique('')).toEqual(true);
  });
  it('Should return true for a string with all uniques', () => {
    expect(isStringUnique('abcdefghijklmnopqrstuvwxyz')).toEqual(true);
  });
  it('Should return false for a string with non uniques', () => {
    expect(isStringUnique('ahhhalkjs')).toEqual(false);
  });
});

describe('Is Unique Sort Strategy', () => {
  let uniques = isStringUniqueSort(makeBigString(27));
  it('Should return false if string is over 26 characters', () => {
    expect(uniques).toEqual(false);
  });
  it('Should return true for an empty string', () => {
    expect(isStringUniqueSort('')).toEqual(true);
  });
  it('Should return true for a string with all uniques', () => {
    expect(isStringUniqueSort('abcdefghijklmnopqrstuvwxyz')).toEqual(true);
  });
  it('Should return false for a string with non uniques', () => {
    expect(isStringUniqueSort('ahhhalkjs')).toEqual(false);
  });
});
