const {
  checkPermutation,
  checkPermutationSort,
} = require('./checkPermutation');

describe('Check Permutation', () => {
  const string1 = 'asdfghjkl';
  const string2 = 'asdfghjkl';
  const string3 = 'qwertyuiop';
  it('Returns true when passed 2 empty strings', () => {
    expect(checkPermutation('', '')).toBe(true);
    expect(checkPermutationSort('', '')).toBe(true);
  });
  it('Returns true when passed 2 identical strings', () => {
    expect(checkPermutation(string1, string2)).toBe(true);
    expect(checkPermutationSort(string1, string2)).toBe(true);
  });
  it('Returns false when passed 2 strings of different lengths', () => {
    expect(checkPermutation(string2, string3)).toBe(false);
    expect(checkPermutationSort(string1, string2)).toBe(true);
  });
  it('Returns true when passed 2 strings that are permutations of one another', () => {
    expect(checkPermutation('abcd', 'dcba')).toBe(true);
    expect(checkPermutationSort('abcd', 'dcba')).toBe(true);
  });
  it('Returns false when passed 2 strings of the same length that are not permutations of one another', () => {
    expect(checkPermutation('abcd', 'aaaa')).toBe(false);
    expect(checkPermutationSort('abcd', 'aaaa')).toBe(false);
  });
});
