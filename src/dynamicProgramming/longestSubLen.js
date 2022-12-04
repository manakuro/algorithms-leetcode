/**
 * Input
 * nums: the integer sequence
 * Output
 * the length of the longest subsequence
 *
 * Examples
 * Example 1:
 * Input:
 *
 * nums = [50, 3, 10, 7, 40, 80]
 *
 * Output: 4
 *
 * @param {number[]} nums
 * @return {number}
 */
function longestSubLen(nums) {
  const subsets = generateSubsets(nums)
  let max = 0
  for (const subset of subsets) {
    if (isIncreasing(subset)) {
      max = Math.max(max, subset.length)
    }
  }

  return max
}

function longestSubLenDP(nums) {
  const INFINITY = Number.MAX_VALUE
  let dp = new Array(nums.length + 1).fill(INFINITY)
  dp[0] = -INFINITY

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= nums.length; j++) {
      if (dp[j - 1] < nums[i] && nums[i] < dp[j]) {
        dp[j] = nums[i]
      }
    }
  }

  let result = 0
  for (let i = 0; i <= nums.length; i++) {
    if (dp[i] < INFINITY) {
      result = i
    }
  }
  return result
}

/**
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const isIncreasing = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] >= nums[i]) {
      return false
    }
  }

  return true
}
/**
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const generateSubsets = (nums) => {
  const result = [[]]
  const path = []
  const dfs = (i) => {
    if (i >= nums.length) {
      result.push([...path])
      return
    }

    path.push(nums[i])
    dfs(i + 1)

    path.pop()
    dfs(i + 1)
  }

  dfs(0, [])
  return result
}

console.log(longestSubLen([50, 3, 10, 7, 40, 80]))
console.log(longestSubLenDP([50, 3, 10, 7, 40, 80]))
