/**
 * Given an array of integers sorted in increasing order and a target, find the index of the first element in the array that is larger than or equal to the target. Assume that it is guaranteed to find a satisfying number.
 *
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
function firstNotSmaller(arr, target) {
  let start = 0
  let end = arr.length - 1
  let result = -1

  while (start <= end) {
    const middle = Math.floor((start + end) / 2)
    const value = arr[middle]

    if (value >= target) {
      end = middle - 1
      result = middle
    } else {
      start = middle + 1
    }
  }

  return result
}

console.log(firstNotSmaller([1, 3, 3, 5, 8, 8, 10], 2)) // 1
