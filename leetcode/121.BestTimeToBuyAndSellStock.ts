function maxProfit(prices: number[]): number {
  let left = 0
  let right = 1
  let max = 0

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      max = Math.max(max, prices[right] - prices[left])
    } else {
      left = right
    }

    right++
  }

  return max
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
