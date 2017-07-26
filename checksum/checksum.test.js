const checksum = require('./checksum')

test('#checksum', () => {
  expect(checksum(4578423013769219)).toBe(true)
  expect(checksum(4578423013769218)).toBe(false)
})
