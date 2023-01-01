package leetcode

import "math"

func maxArea(height []int) int {
	result := 0
	left := 0
	right := len(height) - 1

	for left < right {
		area := (right - left) * int(math.Min(float64(height[left]), float64(height[right])))
		result = int(math.Max(float64(result), float64(area)))

		if height[left] < height[right] {
			left++
			continue
		}

		right--
	}

	return result
}
