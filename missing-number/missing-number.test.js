const missingNumber = require('./missing-number')

test('#missingNumber', () => {
  expect(missingNumber([1, 2, 4])).toBe(3)
  expect(missingNumber([1, 2, 3, 4, 5, 6, 8])).toBe(7)
})
