/**
 * You are given coins of different denominations and a total amount of money amount. Write a function to compute the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.
 *
 * You may assume that you have an infinite number of each kind of coin.
 *
 * Input
 * coins: A list of the coins and their denominations.
 * amount: The target amount
 * Output
 * The number of combinations that make up that amount.
 *
 * @example
 * Input:
 *
 * coins = [1, 2, 5]
 * amount = 5
 *
 * Output: 4
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinGame(coins, amount) {
  const dp = [...new Array(coins.length + 1)].map(() => [
    ...new Array(amount + 1).fill(-1),
  ])

  const dfs = (startIndex, sum) => {
    if (sum === amount) return 1
    if (sum > amount) return 0

    if (dp[startIndex][sum] !== -1) return dp[startIndex][sum]

    let count = 0
    for (let i = startIndex; i < coins.length; i++) {
      count += dfs(i, coins[i] + sum)
    }
    dp[startIndex][sum] = count

    return count
  }

  return dfs(0, 0)
}
console.log(coinGame([1, 2, 5], 5))
