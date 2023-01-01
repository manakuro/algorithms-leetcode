package leetcode

func twoSum(nums []int, target int) []int {
	m := map[int]int{}
	var r []int

	for i, num := range nums {
		diff := target - num

		v, ok := m[diff]
		if ok {
			return []int{v, i}
		}
		m[num] = i
	}

	return r
}
