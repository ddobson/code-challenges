Array.prototype.square = function () {
  return this.map(n => {
    return Math.pow(n, 2)
  })
}

Array.prototype.cube = function () {
  return this.map(n => {
    return Math.pow(n, 3)
  })
}

Array.prototype.sum = function () {
  return this.reduce((memo, curr) => {
    return memo + curr
  }, 0)
}

Array.prototype.average = function () {
  return this.sum() / this.length
}

Array.prototype.even = function () {
  return this.filter(n => {
    return n % 2 === 0
  })
}

Array.prototype.odd = function () {
  return this.filter(n => {
    return n % 2 !== 0
  })
}

module.exports = Array
