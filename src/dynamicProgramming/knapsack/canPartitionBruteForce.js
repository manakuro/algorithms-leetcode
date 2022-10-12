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
function canPartitionBruteForce(nums) {
  const totalSum = nums.reduce((acc, v) => acc + v, 0)
  if (totalSum % 2 !== 0) return false

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

    return (
      exists(i - 1, sum, current + nums[i - 1]) || exists(i - 1, sum, current)
    )
  }

  return exists(nums.length, totalSum / 2, 0)
}
console.log(canPartitionBruteForce([3, 4, 7]))
console.log(canPartitionBruteForce([1, 5, 11, 5]))
