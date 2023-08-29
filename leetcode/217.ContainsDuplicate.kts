class Solution {
	fun containsDuplicate(nums: IntArray): Boolean {
		val maps = mutableMapOf<Int, Unit>()

		for (num in nums) {
			if (maps.containsKey(num)) {
				return true
			}
			maps[num] = Unit
		}

		return false
	}
}
