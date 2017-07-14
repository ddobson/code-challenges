const canRansom = require('./ransom-note')

test('#canRansom', () => {
  const input = 'this is the magazine for ransom'

  expect(canRansom(input, 'this is the ransom')).toBe(true)
  expect(canRansom(input, 'this is the ransom note')).toBe(false)
})
