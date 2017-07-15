// Implement the function uniqueInOrder which takes as argument any iterable and
// returns a list of items without any elements with the same value next to each
// other and preserving the original order of elements.

function uniqueInOrder (iterable) {
  const result = []
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      result.push(iterable[i])
    }
  }

  return result
}

module.exports = uniqueInOrder
