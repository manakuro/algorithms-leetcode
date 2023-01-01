package leetcode

func containsDuplicate(nums []int) bool {
	mappings := make(map[int]struct{})

	for _, num := range nums {
		if _, ok := mappings[num]; ok {
			return true
		}
		mappings[num] = struct{}{}
	}

	return false
}
