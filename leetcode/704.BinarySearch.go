package leetcode

import "math"

func search(nums []int, target int) int {
	start := 0
	end := len(nums) - 1

	for start <= end {
		middleIndex := int(math.Floor(float64((start + end) / 2)))
		current := nums[middleIndex]

		if target == current {
			return middleIndex
		}

		if target < current {
			end = middleIndex - 1
		} else {
			start = middleIndex + 1
		}
	}

	return -1
}
