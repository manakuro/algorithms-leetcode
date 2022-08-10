class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  enqueue(val) {
    const newNode = new Node(val)
    if (this.size === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }

    this.size++

    return this.size
  }

  dequeue() {
    if (this.size === 0) return

    const currentFirst = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return currentFirst.value
  }
}

const queue = new Queue()
console.log(queue.enqueue('1'))
console.log(queue.enqueue('2'))
console.log(queue.enqueue('3'))

console.log(queue.dequeue())
