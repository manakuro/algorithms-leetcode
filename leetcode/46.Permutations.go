package leetcode

func permute(nums []int) [][]int {
	var result [][]int

	if len(nums) == 1 {
		return [][]int{append([]int{}, nums...)}
	}

	for i := 0; i < len(nums); i++ {
		num := nums[0]
		nums = nums[1:]

		perms := permute(nums)

		for j := range perms {
			perms[j] = append(perms[j], num)
		}

		result = append(result, perms...)
		nums = append(nums, num)
	}

	return result
}
