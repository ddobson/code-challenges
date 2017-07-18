const isSquaredCopy = require('./squared-copy')

describe('#isSquaredCopy', () => {
  const arr1 = [121, 144, 19, 161, 19, 144, 19, 11]
  const arr2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  const arr3 = [1, 2, 3, 4, 5, 6, 7, 8]

  test('it finds squared copies', () => {
    expect(isSquaredCopy(arr1, arr2)).toBe(true)
    expect(isSquaredCopy(arr1, arr3)).toBe(false)
  })

  test('it hanles null values', () => {
    expect(isSquaredCopy(arr1, null)).toBe(false)
  })
})
