/**
 * MedianFinder - Priority Queue
 */
// Small Heap - MaxHeap
// Large Heap - MinHeap
class MedianFinder {
  small: PriorityHeap = new PriorityHeap()
  large: PriorityHeap = new PriorityHeap()

  addNum(num: number): void {
    this.small.enqueue(num, -num)

    if (
      this.small.size() &&
      this.large.size() &&
      this.small.values[0].value > this.large.values[0].value
    ) {
      const node = this.small.dequeue()
      this.large.enqueue(node.value, node.priority)
    }
    if (this.small.size() > this.large.size() + 1) {
      const node = this.small.dequeue()
      this.large.enqueue(node.value, node.priority)
    }
    if (this.large.size() > this.small.size() + 1) {
      const node = this.large.dequeue()
      this.small.enqueue(node.value, -node.priority)
    }
  }

  findMedian(): number {
    if (this.small.size() > this.large.size()) return this.small.values[0].value
    if (this.large.size() > this.small.size()) return this.large.values[0].value

    return (this.small.values[0].value + this.large.values[0].value) / 2
  }
}

class HeapNode {
  value: number
  priority: number

  constructor(value: number, priority: number) {
    this.value = value
    this.priority = priority
  }
}

class PriorityHeap {
  values: HeapNode[] = []

  enqueue(value: number, priority: number) {
    const newNode = new HeapNode(value, priority)
    this.values.push(newNode)
    this.bubbleUp()
  }
  dequeue() {
    const max = this.values[0]
    const end = this.values.pop()!
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }

    return max
  }
  size(): number {
    return this.values.length
  }

  private bubbleUp() {
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

  private sinkDown() {
    let index = 0
    const length = this.values.length
    const element = this.values[0]

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const leftChildIndex = 2 * index + 1
      const rightChildIndex = 2 * index + 2

      let leftChild: HeapNode
      let rightChild: HeapNode
      let swappedIndex: number | null = null

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
          (swappedIndex !== null && rightChild.priority < leftChild!.priority)
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

const median = new MedianFinder()
median.addNum(1)
median.addNum(2)
console.log(median.findMedian())
median.addNum(3)
console.log(median.findMedian())
