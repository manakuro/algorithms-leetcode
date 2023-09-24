class Solution {
	fun sortColors(nums: IntArray): Unit {
		for (i in nums.indices.reversed()) {
			var swapped = false
			for (j in 0 until i) {
				if (nums[j] > nums[j + 1]) {
					val tmp = nums[j]
					nums[j] = nums[j+1]
					nums[j+1] = tmp
					swapped = true
				}
			}
			if (!swapped) {
				break
			}
		}
	}
}
