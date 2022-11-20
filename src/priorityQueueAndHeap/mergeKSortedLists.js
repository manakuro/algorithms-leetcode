import { MinHeap, HeapItem } from './minHeap'

/**
 *
 * @param {number[][]}lists
 * @return {number[][]}
 */
function mergeKSortedLists(lists) {
  const result = []
  const heap = new MinHeap()

  for (const list of lists) {
    heap.push(new HeapItem([list[0], list, 0], list[0]))
  }

  // The smallest number in the pool is the smallest number of all the lists and should be added to the final merged list.
  // We then take the next smallest number from the list and add it to the pool.
  // Repeat until we have exhausted all the lists.
  // e.g.
  // [
  //    [1, 3, 5],
  //    [2, 4, 6],
  //    [7, 10],
  // ]
  //
  // 1. [1, [1, 3, 5], 0]
  // 2. [2, [2, 4, 6], 0]
  // 3. [3, [1, 3, 5], 1]
  while (heap.peek()) {
    let [val, currentList, headIndex] = heap.pop().item
    result.push(val)
    headIndex++
    if (headIndex < currentList.length) {
      heap.push(
        new HeapItem(
          [currentList[headIndex], currentList, headIndex],
          currentList[headIndex],
        ),
      )
    }
  }

  return result
}

// [ 1, 2, 3, 4, 5, 6, 7, 10 ]
console.log(
  mergeKSortedLists([
    [1, 3, 5],
    [2, 4, 6],
    [7, 10],
  ]),
)
