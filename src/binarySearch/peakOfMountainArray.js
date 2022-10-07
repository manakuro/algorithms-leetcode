/**
 * Find the index of the peak element. Assume there is only one peak element.
 *
 * @param {number[]} arr
 * @return {number}
 */
function peakOfMountainArray(arr) {
  let start = 0
  let end = arr.length - 1
  let result = -1

  while (start <= end) {
    const middle = Math.floor((start + end) / 2)
    const value = arr[middle]
    const nextValue = arr[middle + 1]

    if (value > nextValue) {
      end = middle - 1
      result = middle
    } else {
      start = middle + 1
    }
  }

  return result
}

// Output: 3
// Explanation: the largest element is 3 and its index is 3.
console.log(peakOfMountainArray([0, 1, 2, 3, 2, 1, 0]))
