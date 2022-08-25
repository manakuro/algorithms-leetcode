class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class BaseQueue {
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

const MyQueue = function () {
  this.queue = new BaseQueue()
}

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.queue.enqueue(x)
}

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.queue.dequeue()
}

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.queue.first.value
}

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.queue.size === 0
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
const queue = new MyQueue()
queue.push(1)
queue.push(2)
console.log(queue.peek())
console.log(queue.pop())
console.log(queue.empty())
