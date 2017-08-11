// Given a list of integers and a single sum value, return the first two values
// (parse from the left please) in order of appearance that add up to form the
// sum.

function sumPairs (ints, s) {
  var mem = {}
  for (var i = 0; i < ints.length; ++i) {
    if (mem[s - ints[i]]) return [s - ints[i], ints[i]]
    mem[ints[i]] = true
  }
}

module.exports = sumPairs
