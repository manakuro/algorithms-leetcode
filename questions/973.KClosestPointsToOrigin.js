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
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function (points, k) {
  const heap = new MinHeap()
  for (const point of points) {
    heap.push(new HeapItem(point, Math.sqrt(point[0] ** 2 + point[1] ** 2)))
  }

  const result = []
  for (let i = 0; i < k; i++) {
    result.push(heap.pop().item)
  }

  return result
}

console.log(
  kClosest(
    [
      [1, 1],
      [2, 2],
      [3, 3],
    ],
    1,
  ),
)
