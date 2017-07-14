const Item = require('./item')

const Queue = function () {
  this.head = null
  this.tail = null
  this.size = 0
}

Queue.prototype.enqueue = function (data) {
  const item = new Item(data)

  if (!this.head) {
    this.head = item
    this.tail = item
  } else {
    this.tail.next = item
    this.tail = item
  }

  this.size += 1
  return item
}

Queue.prototype.dequeue = function () {
  const temp = this.head

  if (!this.head) {
    return null
  }

  if (this.head === this.tail) {
    this.head = null
    this.tail = null
  } else {
    this.head = this.head.next
  }

  this.size > 0 ? this.size -= 1 : this.size = 0
  return temp
}

module.exports = Queue

// Example Queue
// HEAD [1 <- 2 <- 3 <- 4 <- 5] TAIL
