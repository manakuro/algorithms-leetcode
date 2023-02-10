function coinChange(coins: number[], amount: number): number {
  const memo = [...new Array(amount + 1)].fill(-1)

  const dfs = (sum: number): number => {
    if (sum === amount) return 0
    if (sum > amount) return Infinity
    if (memo[sum] !== -1) return memo[sum]

    let result: number = Infinity
    for (const coin of coins) {
      let total = dfs(sum + coin)
      if (total === Infinity) continue

      result = Math.min(result, total + 1)
    }

    return (memo[sum] = result)
  }

  const res = dfs(0)

  return res === Infinity ? -1 : res
}
console.log(coinChange([1, 2, 5], 11)) // 11 = 5 + 5 + 1, 3 total coins
