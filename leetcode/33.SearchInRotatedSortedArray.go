package leetcode

import "math"

func searchInRotatedSortedArray(nums []int, target int) int {
	left := 0
	right := len(nums) - 1

	for left <= right {
		middle := int(math.Floor(float64((left + right) / 2)))

		if target == nums[middle] {
			return middle
		}

		if nums[left] <= nums[middle] {
			lowestLeft := nums[left]

			if target > nums[middle] || target < lowestLeft {
				left = middle + 1
			} else {
				right = middle - 1
			}
		} else {
			highestRight := nums[right]

			if target < nums[middle] || target > highestRight {
				right = middle - 1
			} else {
				left = middle + 1
			}
		}
	}

	return -1
}
