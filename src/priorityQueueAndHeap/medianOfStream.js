import { MinHeap, HeapItem } from './minHeap'

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
