/**
 * You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
 *
 * Example 1:
 * Input: coins = [1, 2, 5], amount = 11
 *
 * Output: 3
 *
 * Explanation:
 * 11 = 5 + 5 + 1, 3 total coins
 *
 * Example 2:
 * Input: coins = [3], amount = 1
 *
 * Output: -1
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
  const dp = [...new Array(amount + 1)].fill(Infinity)

  dp[0] = 0

  // e.g. n = 7, [1,3,4,5]
  // dp[0] = 0
  // dp[1] = 1
  // dp[2] = 2
  // dp[3] = 1
  // dp[4] = 1
  // dp[5] = 1
  // dp[6] = 2
  // dp[7] = 1 + dp[6] = 3
  //
  // [1,3,4,5]
  // dp[7-1] = 1 + dp[6] = 3
  // dp[7-3] = 1 + dp[4] = 2
  // dp[7-4] = 1 + dp[3] = 2
  // dp[7-5] = 1 + dp[2] = 3
  //
  // The min value is 2.
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin])
      }
    }
  }

  if (dp[amount] === Infinity) return -1

  return dp[amount]
}
console.log(coinChange([1, 2, 5], 11))
