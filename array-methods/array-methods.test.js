require('./array-methods')

describe('Array', () => {
  const array = [1, 2, 3, 4, 5]

  test('#square', () => {
    expect(array.square()).toEqual([1, 4, 9, 16, 25])
  })

  test('#cube', () => {
    expect(array.cube()).toEqual([1, 8, 27, 64, 125])
  })

  test('#sum', () => {
    expect(array.sum()).toBe(15)
  })

  test('#average', () => {
    expect(array.average()).toBe(3)
  })

  test('#average empty', () => {
    expect([].average()).toEqual(NaN)
  })

  test('#even', () => {
    expect(array.even()).toEqual([2, 4])
  })

  test('#odd', () => {
    expect(array.odd()).toEqual([1, 3, 5])
  })
})
