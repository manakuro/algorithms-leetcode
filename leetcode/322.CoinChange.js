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

  console.log(dp)
  return dp[amount]
}

console.log(coinChange([1, 3, 4, 5], 7))
// console.log(coinChange([1,2,5,10], 18))
// console.log(coinChange([1], 0))

const coinChangeDFS = function (coins, amount) {
  let min = -1

  const stack = []

  const traverse = (i, sum) => {
    if (sum > amount) return

    if (sum === amount) {
      if (min < 0) {
        min = stack.length
      } else {
        min = Math.min(min, stack.length)
      }
      return
    }

    for (let j = i; j < coins.length; j++) {
      stack.push(coins[j])
      traverse(j, sum + coins[j])
      stack.pop()
    }
  }

  traverse(0, 0)

  return min
}
console.log(coinChangeDFS([1, 3, 4, 5], 7))
