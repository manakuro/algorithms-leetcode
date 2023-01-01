package leetcode

import "math"

func largestRectangleArea(heights []int) int {
	max := 0
	var stack [][]int

	for i := 0; i < len(heights); i++ {
		height := heights[i]
		start := i

		for len(stack) > 0 && stack[len(stack)-1][1] > height {
			popped := stack[len(stack)-1]
			stack = stack[:len(stack)-1]

			index, h := popped[0], popped[1]

			max = int(math.Max(float64(max), float64(h*(i-index))))
			start = index
		}
		stack = append(stack, []int{start, height})
	}

	for _, s := range stack {
		index, height := s[0], s[1]
		max = int(math.Max(float64(max), float64(height*(len(heights)-index))))
	}

	return max
}
