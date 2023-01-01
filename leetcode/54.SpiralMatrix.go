package leetcode

func spiralOrder(matrix [][]int) []int {
	var result []int
	left := 0
	right := len(matrix[0])
	top := 0
	bottom := len(matrix)

	for left < right && top < bottom {
		// right to left in top row
		for i := left; i < right; i++ {
			result = append(result, matrix[top][i])
		}
		top++

		// top to bottom in right column
		for i := top; i < bottom; i++ {
			result = append(result, matrix[i][right-1])
		}
		right--

		// break if it reaches to the end
		if !(left < right && top < bottom) {
			break
		}

		// right to left in bottom row
		for i := right - 1; i >= left; i-- {
			result = append(result, matrix[bottom-1][i])
		}
		bottom--

		// bottom to top in left column
		for i := bottom - 1; i >= top; i-- {
			result = append(result, matrix[i][left])
		}
		left++
	}

	return result
}
