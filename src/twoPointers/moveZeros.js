/**
 * Given an array of integers, move all the 0s to the back of the array while maintaining the relative order of the non-zero elements. Do this in-place using constant auxiliary space.
 *
 * Input:
 * [1, 0, 2, 0, 0, 7]
 *
 * Output:
 * [1, 2, 7, 0, 0, 0]
 *
 * @param {number[]} nums
 */
function moveZeros(nums) {
  let slow = 0
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      ;[nums[slow], nums[fast]] = [nums[fast], nums[slow]]
      slow++
    }
  }
}

const array = [1, 0, 2, 0, 0, 7]
moveZeros(array)
console.log(array)
