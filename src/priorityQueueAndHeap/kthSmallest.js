import { MinHeap, HeapItem } from './minHeap'

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
