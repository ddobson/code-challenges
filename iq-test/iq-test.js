// Bob is preparing to pass IQ test. The most frequent task in this test is to
// find out which one of the given numbers differs from the others. Bob observed
// that one number usually differs from the others in evenness. Help Bob — to
// check his answers, he needs a program that among the given numbers finds one
// that is different in evenness, and return a position of this number.

// Example: iqTest("2 4 7 8 10") => 3
// Third number is odd, while the rest of the numbers are even

function iqTest (numbers) {
  const parsedNums = numbers.split(' ').map(x => parseInt(x))
  const evens = parsedNums.filter(x => x % 2 === 0)
  const odds = parsedNums.filter(x => x % 2 !== 0)

  return evens.length < odds.length
    ? parsedNums.indexOf(evens[0]) + 1
    : parsedNums.indexOf(odds[0]) + 1
}

module.exports = iqTest
