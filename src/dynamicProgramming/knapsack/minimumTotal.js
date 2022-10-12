/**
 * The problem is to find the minimum path sum from top to bottom if given a triangle. Each step you may move to adjacent numbers on the row below.
 *
 * Input
 * triangle: see example
 * Output
 * the minimum path sum
 *
 * Example 1:
 * Input:
 *
 * triangle = [
 *      [2],
 *     [3,4],
 *    [6,5,7],
 *   [4,1,8,3]
 * ]
 * Output: 11
 *
 * Explanation:
 *
 * The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11.
 *
 * @param {number[][]}triangle
 * @return {number}
 */
function minimumTotal(triangle) {
  const n = triangle.length
  const dp = [...new Array(n + 1)].map(() => [...new Array(n + 1)].fill(0))

  for (let i = 0; i < n; i++) {
    dp[n - 1][i] = triangle[n - 1][i]
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]
    }
  }

  return dp[0][0]
}

// 11
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))
