class MaxBinaryHeap {
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
}
const heap = new MaxBinaryHeap()
console.log(heap.values)
