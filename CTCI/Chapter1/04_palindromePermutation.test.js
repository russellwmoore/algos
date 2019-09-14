const { palindromePermutation } = require('./04_palindromePermutation');

describe('URLify', () => {
  it('Returns true for a blank string', () => {
    expect(palindromePermutation('')).toBe(true);
  });
  it('Returns false for a non palindrome', () => {
    expect(palindromePermutation('taco')).toBe(false);
  });
  it('Returns true for a palindrome permutation', () => {
    expect(palindromePermutation('taco cat')).toBe(true);
  });
  it('Is case insensitive', () => {
    expect(palindromePermutation('TAco cat')).toBe(true);
  });
});
