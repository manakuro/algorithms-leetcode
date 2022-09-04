/**
 * coinChange - Dynamic Programming
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
  const dp = [...new Array(amount + 1)].fill(Infinity)

  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin])
      }
    }
  }

  if (dp[amount] === Infinity) return -1

  console.log(dp)
  return dp[amount]
}

console.log(coinChange([1, 2, 5], 11))
// console.log(coinChange([1,2,5,10], 18))
// console.log(coinChange([1], 0))
