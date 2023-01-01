/**
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
 *
 * If target is not found in the array, return [-1, -1].
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * @param {number[]} nums
 * @param {number} target
 */
function searchRange(nums, target) {
  let start = 0
  let end = nums.length - 1
  let firstPosition = -1
  let lastPosition = -1

  while (start <= end) {
    const middle = Math.floor((start + end) / 2)
    const value = nums[middle]

    if (value === target) {
      firstPosition = middle
      end = middle - 1
    } else if (value > target) {
      end = middle - 1
    } else {
      start = middle + 1
    }
  }

  start = 0
  end = nums.length - 1
  while (start <= end) {
    const middle = Math.floor((start + end) / 2)
    const value = nums[middle]

    if (value === target) {
      lastPosition = middle
      start = middle + 1
    } else if (value > target) {
      end = middle - 1
    } else {
      start = middle + 1
    }
  }

  return [firstPosition, lastPosition]
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
