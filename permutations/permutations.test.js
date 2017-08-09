const permutations = require('./permutations')

test('#permutations', () => {
  expect(permutations('ab')).toEqual(['ab', 'ba'])
  expect(permutations('abc')).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
})
