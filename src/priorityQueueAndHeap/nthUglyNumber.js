import { MinHeap, HeapItem } from './minHeap'

/**
 * Write a program to find the n-th ugly number.
 *
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
 *
 * Input:n = 10
 * Output: 12
 * Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
 *
 * @param {number} n
 * @return {number}
 */
function nthUglyNumber(n) {
  const allowedPrime = [2, 3, 5]
  const heap = new MinHeap()
  const usedNums = new Set()

  heap.push(new HeapItem(1))
  usedNums.add(1)
  for (let i = 0; i < n - 1; i++) {
    const val = heap.pop().item
    for (const prime of allowedPrime) {
      const result = val * prime
      if (!usedNums.has(result)) {
        heap.push(new HeapItem(result))
        usedNums.add(result)
      }
    }
  }

  return heap.peek().item
}
console.log(nthUglyNumber(10))
