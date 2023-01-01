package leetcode

import "math"

func trap(height []int) int {
	if len(height) == 0 {
		return 0
	}

	left := 0
	right := len(height) - 1
	leftMax := height[left]
	rightMax := height[right]
	result := 0

	for left < right {
		if leftMax < rightMax {
			left++
			leftMax = int(math.Max(float64(leftMax), float64(height[left])))
			result += leftMax - height[left]
		} else {
			right--
			rightMax = int(math.Max(float64(rightMax), float64(height[right])))
			result += rightMax - height[right]
		}
	}

	return result
}
