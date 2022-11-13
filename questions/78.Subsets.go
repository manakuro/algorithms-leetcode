package questions

func subsets(nums []int) [][]int {
	var traverse func(i int)
	var result [][]int
	var subset []int

	traverse = func(i int) {
		if i >= len(nums) {
			result = append(result, append([]int{}, subset...))
			return
		}

		subset = append(subset, nums[i])
		traverse(i + 1)

		subset = subset[:len(subset)-1]
		traverse(i + 1)
	}

	traverse(0)

	return result
}
