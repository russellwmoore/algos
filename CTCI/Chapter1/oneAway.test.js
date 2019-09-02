const { oneAway } = require('./oneAway');

describe('oneAway', () => {
  it('Returns true for no edits', () => {
    expect(oneAway('pale', 'pale')).toBe(true);
  });
  it('Returns true for one subtraction', () => {
    expect(oneAway('pale', 'ple')).toBe(true);
  });
  it('Returns true for one subtraction', () => {
    expect(oneAway('ple', 'pale')).toBe(true);
  });
  it('Returns true for one addition', () => {
    expect(oneAway('ple', 'pale')).toBe(true);
  });
  it('Returns true for one subtraction', () => {
    expect(oneAway('pales', 'pale')).toBe(true);
  });
  it('Returns true for one edit', () => {
    expect(oneAway('pale', 'bale')).toBe(true);
  });
  it('Returns false for more than one edit', () => {
    expect(oneAway('pale', 'bake')).toBe(false);
  });
});
