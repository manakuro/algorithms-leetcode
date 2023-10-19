class Solution {
	fun maxProfit(prices: IntArray): Int {
		var left = 0
		var right = 1
		var max = 0

		while (right < prices.size) {
			if (prices[left] < prices[right]) {
				max = maxOf(max, prices[right] - prices[left])
			} else {
				left = right
			}

			right++
		}

		return max
	}
}
