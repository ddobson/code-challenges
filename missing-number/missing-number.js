// Given an ordered array of intergers from 1 to n with a single element missing
// from the set, find the missing number.

// Example: [1, 2, 3, 4, 6] => 5

function sumReduce (memo, int) {
  const sum = memo += int
  return sum
}

function missingNumber (integers) {
  const sum = integers.reduce(sumReduce, 0)
  const expectedSum = Array
    .from(new Array(integers.length + 1), (e, i) => i + 1)
    .reduce(sumReduce, 0)

  return expectedSum - sum
}

module.exports = missingNumber
