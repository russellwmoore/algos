const { stringCompression } = require('./06_stringCompression');

describe('stringCompression', () => {
  it('Returns a string', () => {
    expect(typeof stringCompression('hello')).toBe('string');
  });
  it('Returns an abbreviated string', () => {
    expect(stringCompression('aaabbbccc')).toBe('a3b3c3');
  });
  it('Returns original string if abbreviation is longer', () => {
    expect(stringCompression('chef')).toBe('chef');
  });
});
