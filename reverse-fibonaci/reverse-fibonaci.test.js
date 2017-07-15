const reverseFibs = require('./reverse-fibonaci')

test('#reverseFibs', () => {
  const reversed = reverseFibs(10)
  expect(reversed).toEqual([55, 34, 21, 13, 8, 5, 3, 2, 1, 1, 0])
})
