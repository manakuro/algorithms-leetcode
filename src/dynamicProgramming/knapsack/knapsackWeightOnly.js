/**
 * Given a list of n items and their weights, find all sums that can be formed using their weights.
 *
 * Input
 * weights: A list of items and their weights.
 * Output
 * A list of possible sums using the weights.
 *
 * Example 1:
 * Input:
 *
 * weights = [1, 3, 3, 5]
 * Output: [0, 1, 3, 4, 5, 6, 7, 8, 9, 11, 12]
 *
 * Explanation:
 *
 * We can form all sums from 0 to 12 except 2 and 10. Here is a short explanation for the sums:
 *
 * 0: use none of the weights
 * 1: use item with weight 1
 * 3: use item with weight 3
 * 4: use weights 1 + 3 = 4
 * 5: use item with weight 5
 * 6: use weights 3 + 3 = 6
 * 7: use weights 1 + 3 + 3 = 7
 * 8: use weights 3 + 5 = 8
 * 9: use weights 1 + 3 + 5 = 9
 * 11: use weights 3 + 3 + 5 = 11
 * 12: use all weights
 *
 * @param {number[]} weights
 * @return {number[]}
 */
function knapsackWeightOnly(weights) {
  const totalSum = weights.reduce((acc, v) => acc + v, 0)
  const dp = new Array(weights.length + 1)
  for (let i = 0; i <= weights.length; i++) {
    dp[i] = new Array(totalSum + 1)
    for (let j = 0; j <= totalSum; j++) {
      dp[i][j] = false
    }
  }

  dp[0][0] = true
  for (let i = 1; i <= weights.length; i++) {
    for (let j = 0; j <= totalSum; j++) {
      dp[i][j] = dp[i][j] || dp[i - 1][j]
      if (j - weights[i - 1] >= 0) {
        dp[i][j] = dp[i][j] || dp[i - 1][j - weights[i - 1]]
      }
    }
  }

  const result = []
  for (let i = 0; i <= totalSum; i++) {
    if (dp[weights.length][i]) {
      result.push(i)
    }
  }
  return result
}
console.log(knapsackWeightOnly([1, 3, 3, 5]))
