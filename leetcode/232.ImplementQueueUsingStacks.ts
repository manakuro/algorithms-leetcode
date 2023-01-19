class QueueNode {
  public value: number
  public next: QueueNode | null
  constructor(value: number) {
    this.value = value
    this.next = null
  }
}

class BaseQueue {
  public first: QueueNode | null = null
  public last: QueueNode | null = null
  public size: number = 0

  enqueue(val: number) {
    const newNode = new QueueNode(val)
    if (this.size === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      if (this.last) {
        this.last.next = newNode
      }
      this.last = newNode
    }

    this.size++
  }

  dequeue(): number {
    if (this.size === 0) return -1

    const currentFirst = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first?.next ?? null
    this.size--
    return currentFirst?.value ?? -1
  }
}

class MyQueue {
  queue: BaseQueue
  constructor() {
    this.queue = new BaseQueue()
  }

  push(x: number): void {
    this.queue.enqueue(x)
  }

  pop(): number {
    return this.queue.dequeue()
  }

  peek(): number {
    return this.queue.first?.value ?? 0
  }

  empty(): boolean {
    return this.queue.size === 0
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
const q = new MyQueue()
q.push(1)
q.push(2)
console.log(q.peek())
console.log(q.pop())
console.log(q.empty())
