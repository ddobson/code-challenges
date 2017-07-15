const capitals = require('./find-the-capitals')

test('capitals', () => {
  expect(capitals('FunFunFuncTioN'))
    .toEqual([0, 3, 6, 10, 13])
})
