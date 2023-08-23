class Solution {
	fun majorityElement(nums: IntArray): Int {
		var result = 0
		var count = 0

		for (num in nums) {
			if (count == 0) {
				result = num
			}
			if (num == result) {
				count++
			} else {
				count--
			}
		}

		return result
	}
}
