import { MaxHeap, HeapItem } from './maxHeap'

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
