class MinBinaryHeap {
  constructor() {
    this.values = []
  }
  insert(element) {
    this.values.push(element)
    this.bubbleUp()
  }
  bubbleUp() {
    let index = this.values.length - 1
    const element = this.values[index]
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      const parent = this.values[parentIndex]
      if (element <= parent) break

      this.values[parentIndex] = element
      this.values[index] = parent
      index = parentIndex
    }
  }
  extractMax() {
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
        if (leftChild > element) {
          swappedIndex = leftChildIndex
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]
        if (
          (swappedIndex === null && rightChild > element) ||
          (swappedIndex !== null && rightChild > leftChild)
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
const heap = new MinBinaryHeap()
console.log(heap.values)
