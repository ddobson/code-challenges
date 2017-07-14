// A left rotation operation on an array of size  shifts each of the array's
// elements  unit to the left. For example, if left rotations are performed on
// array , then the array would become .

// Given an array of n integers and a number, d, perform  left rotations on the
// array. Then print the updated array as a single line of space-separated
// integers.

function leftRotate (n, d) {
  let i = 0

  while (i++ < d) {
    const first = n.shift()
    n.push(first)
  }

  return n
}

module.exports = leftRotate
