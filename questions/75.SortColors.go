package questions

func sortColors(nums []int) {

	for i := len(nums) - 1; i >= 0; i-- {
		swapped := false

		for j := 0; j < i; j++ {
			if nums[j] > nums[j+1] {
				tmp := nums[j]
				nums[j] = nums[j+1]
				nums[j+1] = tmp
				swapped = true
			}
		}
		if !swapped {
			break
		}
	}
}
