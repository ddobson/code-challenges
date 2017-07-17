const lonelyInt = require('./lonely-integer')

test('#lonelyInt', () => {
  expect(lonelyInt([1, 1, 2, 2, 3])).toBe(3)
  expect(lonelyInt([44, 44, 55])).toBe(55)
})
