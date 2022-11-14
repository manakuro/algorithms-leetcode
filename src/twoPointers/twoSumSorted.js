/**
 *
 * Given an array of integers sorted in ascending order, find two numbers that add up to a given target. Return the indices of the two numbers in ascending order. You can assume elements in the array are unique and there is only one solution. Do this in O(n) time and with constant auxiliary space.
 *
 * Input: [2, 3, 4, 5, 8, 11, 18], 8
 *
 * Output: [1, 3]
 *
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */
function twoSumSorted(arr, target) {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    const sum = arr[right] + arr[left]
    if (sum === target) return [left, right]

    if (sum > target) {
      right--
    } else {
      left++
    }
  }

  return []
}
console.log(twoSumSorted([2, 3, 4, 5, 8, 11, 18], 8))
