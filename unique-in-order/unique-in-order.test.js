const uniqueInOrder = require('./unique-in-order')

describe('#uniqueInOrder', () => {
  test('it organizes strings', () => {
    expect(uniqueInOrder('AAAABBBCCDAABBB'))
      .toEqual(['A', 'B', 'C', 'D', 'A', 'B'])
  })

  test('it organizes arrays', () => {
    expect(uniqueInOrder([1, 2, 2, 3, 3])).toEqual([1, 2, 3])
  })
})
