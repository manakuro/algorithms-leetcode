/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let left = 0
  let right = 1
  let max = 0

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left]
      max = Math.max(max, profit)
    } else {
      // Buy price should be the least so update it.
      left = right
    }
    right++
  }

  return max
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
