package leetcode

import "sort"

func threeSum(nums []int) [][]int {
	var result [][]int

	sort.Ints(nums)

	right := 0
	left := 0

	for i := 0; i < len(nums); i++ {
		num := nums[i]

		if i-1 < len(nums) && i-1 >= 0 && num == nums[i-1] {
			continue
		}
		if num > 0 {
			break
		}

		left = i + 1
		right = len(nums) - 1

		for left < right {
			sum := num + nums[left] + nums[right]
			if sum > 0 {
				right--
				continue
			}
			if sum < 0 {
				left++
				continue
			}

			result = append(result, [][]int{
				{num, nums[left], nums[right]},
			}...)

			left++
			for nums[left] == nums[left-1] && left < right {
				left++
			}
		}
	}

	return result
}
