/**
 * Given a sorted array of integers and a target integer, find the first occurrence of the target and return its index. Return -1 if the target is not in the array.
 *
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
function findFirstOccurrence(arr, target) {
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
console.log(findFirstOccurrence([1, 3, 3, 3, 3, 6, 10, 10, 10, 100], 3))
