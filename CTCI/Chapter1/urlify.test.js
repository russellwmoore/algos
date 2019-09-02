const { urlify } = require('./urlify');

describe('URLify', () => {
  let str = '  Mr. John Smith   ';
  let result = 'Mr.%20John%20Smith';
  it('Returns a string', () => {
    expect(typeof urlify(str)).toBe('string');
  });
  it('Returns a string with no spaces in it', () => {
    let answer = urlify(str);
    let hasSpaces = answer.includes(' ');
    expect(hasSpaces).toBe(false);
  });
  it('Returns a string with %20 replacing all spaces', () => {
    let answer = urlify(str);
    expect(answer).toEqual(result);
  });
});
