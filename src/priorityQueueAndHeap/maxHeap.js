export class HeapItem {
  constructor(item, priority = item) {
    this.item = item
    this.priority = priority
  }
}

export class MaxHeap {
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
