const {ops} = require('./stringOperations')

describe('it does', () => {
  test('should return a number', () => {
    expect(typeof ops('cat', 'tac') === 'number').toBe(true)
  })
  
  test('should return a number', () => {
    expect(ops('cat', 'tac')).toBe(0)
  })

  test('should return a number', () => {
    expect(ops('Tac', 'Cat')).toBe(2)
  })


  test('should return a number', () => {
    expect(ops("aaaaaaa", 'bbbbbbb')).toBe(7)
  })

  test('should return a number', () => {
    expect(ops("a", 'bbbbbbb')).toBe(7)
  })
  
  test('should return a number', () => {
    expect(ops("Bloomberg", 'suckberg')).toBe(5)
  })


})
