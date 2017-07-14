const Queue = require('./queue')
const Item = require('./item')

describe('Queue', () => {
  test('is defined properly', () => {
    const queue = new Queue()

    expect(queue).toBeDefined()
    expect(queue).toBeInstanceOf(Queue)
  })

  test('it can enqueue items', () => {
    const queue = new Queue()
    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.head).toBeInstanceOf(Item)
    expect(queue.head.data).toBe(1)
    expect(queue.tail.data).toBe(2)
  })

  test('enqueue returns an Item w/ correct data', () => {
    const queue = new Queue()
    expect(queue.enqueue(1)).toBeInstanceOf(Item)
    expect(queue.head.data).toBe(1)
  })

  test('queues are the correct size', () => {
    const queue = new Queue()
    expect(queue.size).toBe(0)

    queue.dequeue()
    expect(queue.size).toBe(0)

    queue.enqueue(1)
    expect(queue.size).toBe(1)
  })

  test('dequeue returns an Item w/ correct data', () => {
    const queue = new Queue()
    queue.enqueue(1)

    const dequeued = queue.dequeue()

    expect(dequeued.data).toBe(1)
    expect(dequeued).toBeInstanceOf(Item)
  })

  test('dequeue sets references correctly', () => {
    const queue = new Queue()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.dequeue()

    expect(queue.head.data).toBe(2)
  })
})
