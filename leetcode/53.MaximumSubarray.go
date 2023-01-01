package leetcode

import "math"

func maxSubArray(nums []int) int {
	max := nums[0]
	current := 0

	for _, num := range nums {
		if current < 0 {
			current = 0
		}

		current += num
		max = int(math.Max(float64(max), float64(current)))
	}

	return max
}
