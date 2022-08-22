/**
 * maxSubArray - Greedy Algorithm
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let max = nums[0]
  let currentSum = 0

  for (let i = 0; i < nums.length; i++) {
    if (currentSum < 0) {
      currentSum = 0
    }

    currentSum += nums[i]
    max = Math.max(max, currentSum)
  }

  return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
