class HeapItem {
  constructor(item, priority = item) {
    this.item = item
    this.priority = priority
  }
}

class MaxHeap {
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

      if (parent?.priority >= element?.priority) break
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
          this.heap[left]?.priority > this.heap[min]?.priority) ||
        (right < length && this.heap[right].priority > this.heap[min].priority)
      ) {
        if (right < length) {
          min =
            this.heap[left].priority > this.heap[right].priority ? left : right
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
 * Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not necessarily the kth distinct element.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  const heap = new MaxHeap()
  for (const num of nums) {
    heap.push(new HeapItem(num))
  }
  for (let i = 0; i < k - 1; i++) {
    heap.pop()
  }

  return heap.pop().item
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)) // 5
