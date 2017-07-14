const leftRotate = require('./left-rotate')

test('#leftRotate', () => {
  const input = [1, 2, 3, 4, 5]
  const rotation = 2

  expect(leftRotate(input, rotation)).toEqual([3, 4, 5, 1, 2])
  expect(leftRotate(input, rotation)).toHaveLength(5)
})
