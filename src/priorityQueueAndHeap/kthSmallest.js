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

  push(node) {
    this.heap.push(node)
    this.bubbleUp()
  }
  bubbleUp() {
    let index = this.heap.length - 1
    while (index > 0) {
      const current = this.heap[index]
      const parentIndex = Math.floor((index - 1) / 2)
      const parent = this.heap[parentIndex]

      if (parent.priority <= current.priority) break

      this.heap[index] = parent
      this.heap[parentIndex] = current
      index = parentIndex
    }
  }

  pop() {
    const min = this.heap[0]
    this.heap[0] = this.heap[this.heap.length - 1]
    this.heap.pop()
    this.bubbleDown()
    return min
  }

  bubbleDown() {
    let index = 0
    let min = index
    const size = this.heap.length

    while (index < size) {
      const left = 2 * index + 1
      const right = left + 1

      if (
        (left < size && this.heap[left].priority < this.heap[min].priority) ||
        (right < size && this.heap[right].priority < this.heap[min].priority)
      ) {
        if (right < size) {
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

  peek() {
    return this.heap[0]
  }

  size() {
    return this.heap.length
  }
}

/**
 *
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
function kthSmallest(matrix, k) {
  const heap = new MinHeap()
  for (const list of matrix) {
    heap.push(new HeapItem({ value: list[0], list, index: 0 }, list[0]))
  }

  let count = 1
  while (heap.size() > 0) {
    let { value, list, index } = heap.pop().item
    if (count === k) return value

    count++
    index++
    if (index < list.length) {
      heap.push(new HeapItem({ value: list[index], list, index }, list[index]))
    }
  }

  return 0
}
console.log(
  kthSmallest(
    [
      [1, 5, 9],
      [10, 15, 13],
      [12, 13, 15],
    ],
    5,
  ),
)
