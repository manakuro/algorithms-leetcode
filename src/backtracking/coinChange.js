/**
 *
 * @param {number[]}coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
  const memo = new Array(amount + 1).fill(-1)
  const result = minCoins(coins, amount, 0, memo)

  return result === Infinity ? -1 : result
}

/**
 *
 * @param {number[]}coins
 * @param {number} amount
 * @param {number} sum
 * @param {number[]} memo
 * @return {number}
 */
const minCoins = (coins, amount, sum, memo) => {
  if (sum === amount) {
    return 0
  }

  if (sum > amount) {
    return Infinity
  }

  if (memo[sum] !== -1) {
    return memo[sum]
  }

  let result = Infinity
  for (const coin of coins) {
    let total = minCoins(coins, amount, sum + coin, memo)
    if (total === Infinity) {
      continue
    }

    result = Math.min(result, total + 1)
  }

  return (memo[sum] = result)
}

console.log(coinChange([1, 2, 5], 11)) // 11 = 5 + 5 + 1, 3 total coins
