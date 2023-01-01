package leetcode

func majorityElement(nums []int) int {
	result := 0
	count := 0

	for _, num := range nums {
		if count == 0 {
			result = num
		}
		if num == result {
			count++
		} else {
			count--
		}
	}

	return result
}
