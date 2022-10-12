/**
 * Example 1:
 *
 * Input:
 *  word1 = "abcde"
 *  word2 = "ace"
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
function longestCommonSubsequenceDFS(text1, text2) {
  const memo = [...new Array(text1.length + 1)].map(() =>
    [...new Array(text2.length + 1)].fill(-1),
  )

  /**
   *
   * @param {number} i
   * @param {number} j
   * @return {number}
   */
  const lcs = (i, j) => {
    if (i === 0) return 0
    if (j === 0) return 0
    if (memo[i][j] !== -1) return memo[i][j]

    if (text1[i - 1] === text2[j - 1]) {
      return (memo[i][j] = lcs(i - 1, j - 1) + 1)
    }

    return (memo[i][j] = Math.max(lcs(i - 1, j), lcs(i, j - 1)))
  }

  return lcs(text1.length, text2.length)
}
console.log(longestCommonSubsequenceDFS('abcde', 'ace'))
