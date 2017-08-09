function permutations (string) {
  const perms = []

  if (string.length === 1) {
    perms.push(string)
    return perms
  }

  for (let i = 0; i < string.length; i++) {
    const first = string[i]
    const rest = string.substring(0, i) + string.substring(i + 1)
    const innerPermutations = permutations(rest)
    for (let s = 0; s < innerPermutations.length; s++) {
      perms.push(first + innerPermutations[s])
    }
  }

  return perms
}

module.exports = permutations
