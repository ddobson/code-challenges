// Write a function that takes a single string (word) as argument. The function
// must return an ordered list containing the indexes of all capital letters in
// the string.

function capitals (string) {
  return string.split('').reduce((memo, curr, i) => {
    return curr === curr.toUpperCase() ? memo.concat(i) : memo
  }, [])
}

module.exports = capitals
