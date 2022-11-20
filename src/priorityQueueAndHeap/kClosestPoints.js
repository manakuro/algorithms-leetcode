import { MinHeap, HeapItem } from './minHeap'

/**
 * Given a list of points on a 2D plane. Find k closest points to origin (0, 0).
 * @param {number[][]}points
 * @param {number} k
 * @return {number[][]}
 */
function kClosestPoints(points, k) {
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
  kClosestPoints(
    [
      [1, 1],
      [2, 2],
      [3, 3],
    ],
    1,
  ),
)
