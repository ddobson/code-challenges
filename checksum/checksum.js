// input is a 16 digit number 4578423013769219

function checksum (digits) {
  const last = parseInt(digits.toString().split('').pop())
  const sumDigits = digits
    .toString()
    .split('')
    .slice(0, -1)
    .map((str, i) => i % 2 === 0 ? parseInt(str) * 2 : parseInt(str))
    .map(int => {
      if (int > 9) {
        const strInt = int.toString()
        return parseInt(strInt[0]) + parseInt(strInt[1])
      }
      return int
    })
    .reduce((memo, curr) => {
      return memo + curr
    }, 0)

  return (sumDigits + last) % 10 === 0
}

module.exports = checksum
