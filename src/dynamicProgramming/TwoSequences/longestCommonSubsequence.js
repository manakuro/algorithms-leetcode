/**
 * Example 1:
 *
 * Input:
 *  text1 = "abcde"
 *  text2 = "ace"
 *
 * Output: 3
 *
 * Explanation:
 * The longest common subsequence is ace and its length is 3.
 *
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
function longestCommonSubsequence(text1, text2) {
  const n = text1.length
  const m = text2.length

  const dp = [...new Array(text1.length + 1)].map(() =>
    [...new Array(text2.length + 1)].fill(0),
  )

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0
      } else if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[n][m]
}
console.log(longestCommonSubsequence('abcde', 'ace'))
