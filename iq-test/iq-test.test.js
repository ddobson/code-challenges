const iqTest = require('./iq-test')

test('#iqTest', () => {
  expect(iqTest('2 4 5 6')).toBe(3)
  expect(iqTest('1 33 57 6')).toBe(4)
})
