const duplicateEncode = require('./duplicate-encode')

test('#duplicateEncode', () => {
  expect(duplicateEncode('din')).toBe('(((')
  expect(duplicateEncode('recede')).toBe('()()()')
  expect(duplicateEncode('Success')).toBe(')())())')
  expect(duplicateEncode('(( @')).toBe('))((')
})
