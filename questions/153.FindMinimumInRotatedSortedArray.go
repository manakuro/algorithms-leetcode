package questions

import "math"

func findMin(nums []int) int {
	left := 0
	right := len(nums) - 1
	min := 0
	last := nums[len(nums)-1]

	for left <= right {
		middle := int(math.Floor(float64((left + right) / 2)))
		middleValue := nums[middle]

		if middleValue <= last {
			right = middle - 1
			min = middle
		} else {
			left = middle + 1
		}
	}

	return nums[min]
}
