package leetcode

import "math"

func coinChange(coins []int, amount int) int {
	dp := make(map[int]float64, amount+1)

	for i := 0; i < amount+1; i++ {
		dp[i] = math.Inf(1)
	}

	dp[0] = 0

	for i := 1; i <= amount; i++ {
		for _, coin := range coins {
			if i-coin >= 0 {
				dp[i] = math.Min(dp[i], 1+dp[i-coin])
			}
		}
	}

	if dp[amount] == math.Inf(1) {
		return -1
	}

	return int(dp[amount])
}

func coinChangeDFS(coins []int, amount int) int {
	var dfs func(sum int) int
	memo := make(map[int]int)
	//max := 9223372036854775807
	max := int(math.Inf(0))

	dfs = func(sum int) int {
		if sum == amount {
			return 0
		}
		if sum > amount {
			return max
		}
		if _, ok := memo[sum]; ok {
			return memo[sum]
		}

		result := max
		for _, coin := range coins {
			total := dfs(sum + coin)
			if total == max {
				continue
			}

			result = int(math.Min(float64(result), float64(total+1)))
		}

		memo[sum] = result
		return result
	}

	totalCoins := dfs(0)
	if totalCoins == max {
		return -1
	}

	return totalCoins
}
