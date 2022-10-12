/**
 * Input
 * nums: the array
 * Output
 * if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal
 *
 * Example 1:
 * Input:
 *
 * nums = [3, 4, 7]
 * Output: true
 *
 * Explanation:
 *
 * The array can be partitioned as [3,4] and [7].
 *
 * Example 2:
 * Input:
 *
 * nums = [1, 5, 11, 5]
 * Output: true
 *
 * Explanation:
 *
 * The array can be partitioned as [1, 5, 5] and [11].
 *
 * @param {number[]} nums
 * @return {boolean}
 */
function canPartition(nums) {
  const totalSum = nums.reduce((acc, v) => acc + v, 0)
  if (totalSum % 2 !== 0) return false

  const target = totalSum / 2

  const dp = [...new Array(nums.length + 1)].map(() => [
    ...new Array(target + 1).fill(false),
  ])

  dp[0][0] = true
  for (let i = 1; i <= nums.length; i++) {
    for (let s = 0; s <= target; s++) {
      if (s < nums[i - 1]) {
        dp[i][s] = dp[i - 1][s]
      } else {
        dp[i][s] = dp[i - 1][s] || dp[i - 1][s - nums[i - 1]]
      }
    }
  }
  return dp[nums.length][target]
}
console.log(canPartition([3, 4, 7]))
console.log(canPartition([1, 5, 11, 5]))

/**
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition2 = function (nums) {
  // Calculate sum of the array. If sum is odd, there can not be two subsets with equal sum, so return false.
  const sum = nums.reduce((acc, n) => acc + n, 0)
  if (sum % 2) return false

  let dp = new Set()
  dp.add(0)

  const target = sum / 2

  // If sum of array elements is even, store the sum of all elements using Dynamic Programming.
  for (let i = nums.length - 1; i >= 0; i--) {
    const tmp = new Set()
    dp.forEach((t) => {
      tmp.add(t + nums[i])
      tmp.add(t)
    })
    dp = tmp
  }

  return dp.has(target)
}

console.log(canPartition2([1, 5, 11, 5]))
// console.log(canPartition([1,2,3,5]))
