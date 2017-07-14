// A kidnapper wrote a ransom note but is worried it will be traced back to him. He
// found a magazine and wants to know if he can cut out whole words from it and
// use them to create an untraceable replica of his ransom note. The words in his
// note are case-sensitive and he must use whole words available in the magazine,
// meaning he cannot use substrings or concatenation to create the words he needs.

// Given the words in the magazine and the words in the ransom note, return true if
// he can replicate his ransom note exactly using whole words from the magazine;
// otherwise, return false.

function canRansom (magazine, note) {
  const splitMag = magazine.split(' ')
  const splitNote = note.split(' ')

  return splitNote.every((word) => {
    return splitMag.indexOf(word) > -1
  })
}

module.exports = canRansom
