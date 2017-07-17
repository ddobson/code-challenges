// There are N integers in an array A. All but one integer occur in pairs. Your
// task is to find out the number that occurs only once.

// Example [1, 1, 2, 2, 3] => 3

function lonelyInt (arr) {
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i]
    if (arr.indexOf(curr) === arr.lastIndexOf(curr)) {
      return curr
    }
  }
}

module.exports = lonelyInt
