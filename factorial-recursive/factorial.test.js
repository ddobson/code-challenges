const factorial = require('./factorial')

test('#factorial', () => {
  expect(factorial(3)).toBe(6)
  expect(factorial(4)).toBe(24)
})
