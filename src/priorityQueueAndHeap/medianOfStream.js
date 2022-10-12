class HeapItem {
  constructor(item, priority = item) {
    this.item = item
    this.priority = priority
  }
}

class MinHeap {
  constructor() {
    this.heap = []
  }

  /**
   *
   * @param {HeapItem} node
   */
  push(node) {
    this.heap.push(node)
    this.bubbleUp()
  }

  bubbleUp() {
    let index = this.heap.length - 1

    while (index > 0) {
      const element = this.heap[index]
      const parentIndex = Math.floor((index - 1) / 2)
      const parent = this.heap[parentIndex]

      if (parent?.priority <= element?.priority) break
      this.heap[index] = parent
      this.heap[parentIndex] = element
      index = parentIndex
    }
  }
  bubbleDown() {
    let index = 0
    let min = index
    const length = this.heap.length

    while (index < length) {
      const left = 2 * index + 1
      const right = left + 1
      if (
        (left < length &&
          this.heap[left]?.priority < this.heap[min]?.priority) ||
        (right < length && this.heap[right].priority < this.heap[min].priority)
      ) {
        if (right < length) {
          min =
            this.heap[left].priority < this.heap[right].priority ? left : right
        } else {
          min = left
        }
      }

      if (min === index) break
      ;[this.heap[min], this.heap[index]] = [this.heap[index], this.heap[min]]
      index = min
    }
  }
  pop() {
    const min = this.heap[0]
    this.heap[0] = this.heap[this.size() - 1]
    this.heap.pop()
    this.bubbleDown()
    return min
  }
  peek() {
    return this.heap[0]
  }
  size() {
    return this.heap.length
  }
}

/**
 * Given a stream of numbers, find the median number at any given time (accurate to 1 decimal place). Do this in O(1) time complexity.
 */
class MedianOfStream {
  constructor() {
    this.maxHeap = new MinHeap()
    this.minHeap = new MinHeap()
  }

  /**
   *
   * @param {number} num
   */
  addNumber(num) {
    if (this.minHeap.size() === 0 || num < this.minHeap.peek().item) {
      this.maxHeap.push(new HeapItem(-num))
    } else {
      this.minHeap.push(new HeapItem(num))
    }
    this.balance()
  }
  getMedian() {
    if (this.maxHeap.size() === this.minHeap.size()) {
      return (-this.maxHeap.peek().item + this.minHeap.peek().item) / 2
    } else {
      return -this.maxHeap.peek().item
    }
  }

  balance() {
    if (this.maxHeap.size() < this.minHeap.size()) {
      const val = this.minHeap.pop().item
      this.maxHeap.push(new HeapItem(-val))
    }
    if (this.maxHeap.size() > this.minHeap.size() + 1) {
      const val = this.maxHeap.pop().item
      this.minHeap.push(new HeapItem(-val))
    }
  }
}

const stream = new MedianOfStream()
stream.addNumber(1)
stream.addNumber(2)
console.log(stream.getMedian()) // 1.5

const stream2 = new MedianOfStream()
stream2.addNumber(6)
stream2.addNumber(10)
stream2.addNumber(12)
console.log(stream2.getMedian()) // 10
