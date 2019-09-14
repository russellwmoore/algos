const { stringRotation } = require('./09_stringRotation');

describe('stringRotation', () => {
  test('should return a boolean', () => {
    const string1 = 'chapterbook';
    const string2 = 'terbookchap';
    expect(typeof stringRotation(string1, string2)).toBe('boolean');
  });
  test('should return false for a strings of different lengths', () => {
    const string1 = 'chapterbooks';
    const string2 = 'terbookchap';
    expect(stringRotation(string1, string2)).toBe(false);
  });
  test('should return true for a rotated string', () => {
    const string1 = 'chapterbook';
    const string2 = 'terbookchap';
    expect(stringRotation(string1, string2)).toBe(true);
  });
  test('should return false for a non-rotated string', () => {
    const string1 = 'chawpterbook';
    const string2 = 'terbiikchap';
    expect(stringRotation(string1, string2)).toBe(false);
  });
  test('should return false for a non-rotated string', () => {
    const string1 = 'aaaaaaab';
    const string2 = 'bbbbbbbb';
    expect(stringRotation(string1, string2)).toBe(false);
  });
});
