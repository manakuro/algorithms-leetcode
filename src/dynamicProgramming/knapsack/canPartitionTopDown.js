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
function canPartitionTopDown(nums) {
  const totalSum = nums.reduce((acc, v) => acc + v, 0)
  if (totalSum % 2 !== 0) return false

  const target = totalSum / 2
  const dp = [...new Array(nums.length + 1)].map(() => [
    ...new Array(target + 1),
  ])

  /**
   *
   * @param {number} i
   * @param {number} sum
   * @param {number} current
   * @return {boolean}
   */
  const exists = (i, sum, current) => {
    if (sum === current) return true
    if (i === 0) return false
    if (current > sum) return false

    if (dp[i][current]) return dp[i][current] === 1

    const result =
      exists(i - 1, sum, current + nums[i - 1]) || exists(i - 1, sum, current)
    dp[i][current] = result ? 1 : 2

    return result
  }

  return exists(nums.length, totalSum / 2, 0)
}
console.log(canPartitionTopDown([3, 4, 7]))
console.log(canPartitionTopDown([1, 5, 11, 5]))
