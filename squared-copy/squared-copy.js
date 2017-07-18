// Given two arrays a and b write a function comp(a, b) that checks whether the
// two arrays have the "same" elements, with the same multiplicities. "Same"
// means, here, that the elements in b are the elements in a squared, regardless
// of the order.

function isSquaredCopy (arr1, arr2) {
  if (!arr1 || !arr2) return false

  arr1.sort((a, b) => b - a)
  arr2.sort((a, b) => b - a)

  return arr1.map(e => e * e).every((e, i) => e === arr2[i])
}

// First Attempt

// function isSquaredCopy (array1, array2) {
//   if (!array1 || !array2) return false
//
//   array1.sort((a, b) => b - a)
//   array2.sort((a, b) => b - a)
//
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] * array1[i] !== array2[i]) {
//       return false
//     }
//   }
//
//   return true
// }

module.exports = isSquaredCopy
