package questions

import "math"

func singleNonDuplicate(nums []int) int {
	inLeft := func(index int) bool {
		if index == len(nums)-1 {
			return true
		}
		if index%2 != 0 {
			return nums[index] != nums[index-1]
		}

		return nums[index] != nums[index+1]
	}

	start := 0
	end := len(nums) - 1
	result := -1

	for start <= end {
		middle := int(math.Floor(float64((start + end) / 2)))
		if inLeft(middle) {
			result = middle
			end = middle - 1
		} else {
			start = middle + 1
		}
	}

	return nums[result]
}
