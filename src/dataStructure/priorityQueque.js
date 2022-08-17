class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}

class PriorityHeap {
  constructor() {
    this.values = []
  }
  enqueue(value, priority) {
    const newNode = new Node(value, priority)
    this.values.push(newNode)
    this.bubbleUp()
  }
  bubbleUp() {
    let index = this.values.length - 1
    const element = this.values[index]
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      const parent = this.values[parentIndex]
      if (element.priority >= parent.priority) break

      this.values[parentIndex] = element
      this.values[index] = parent
      index = parentIndex
    }
  }
  dequeue() {
    const max = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }

    return max
  }
  sinkDown() {
    let index = 0
    const length = this.values.length
    const element = this.values[0]

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const leftChildIndex = 2 * index + 1
      const rightChildIndex = 2 * index + 2
      let leftChild, rightChild
      let swappedIndex = null

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex]
        if (leftChild.priority < element.priority) {
          swappedIndex = leftChildIndex
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]
        if (
          (swappedIndex === null && rightChild.priority < element.priority) ||
          (swappedIndex !== null && rightChild.priority < leftChild.priority)
        ) {
          swappedIndex = rightChildIndex
        }
      }

      if (swappedIndex === null) break

      this.values[index] = this.values[swappedIndex]
      this.values[swappedIndex] = this.values[0]
      index = swappedIndex
    }
  }
}

const ER = new PriorityHeap()
ER.enqueue('common cold', 5)
ER.enqueue('gunshot wound', 1)
ER.enqueue('high fever', 4)
ER.enqueue('broken arm', 2)
ER.enqueue('glass in foot', 3)

console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
