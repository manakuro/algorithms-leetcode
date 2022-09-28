package questions

import (
	"math"
)

func maxProfit(prices []int) int {
	left := 0
	right := 1
	max := 0

	for right < len(prices) {
		if prices[left] < prices[right] {
			profit := prices[right] - prices[left]
			max = int(math.Max(float64(max), float64(profit)))
		} else {
			left = right
		}
		right++
	}

	return max
}
