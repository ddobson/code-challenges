function fibSequence (num) {
  const fibs = [0, 1]

  if (num <= 1) {
    return fibs
  }

  for (let i = 2; i <= num; i++) {
    fibs[i] = fibs[i - 1] + fibs[i - 2]
  }

  return fibs
}

function reverseFibs (num) {
  const fibs = fibSequence(num)

  return fibs.sort((a, b) => b - a)
}

module.exports = reverseFibs
