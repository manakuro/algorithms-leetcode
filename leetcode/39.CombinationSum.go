package leetcode

func combinationSum(candidates []int, target int) [][]int {
	var result [][]int

	var traverse func(i int, current []int, total int)
	traverse = func(i int, current []int, total int) {
		if total == target {
			result = append(result, append([]int{}, current...))
			return
		}

		if i >= len(candidates) || total > target {
			return
		}

		current = append(current, candidates[i])
		traverse(i, current, total+candidates[i])

		current = current[:len(current)-1]
		traverse(i+1, current, total)
	}

	traverse(0, []int{}, 0)

	return result
}
