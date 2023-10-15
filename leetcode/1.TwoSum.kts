class Solution {
	fun twoSum(nums: IntArray, target: Int): IntArray {
		val maps = mutableMapOf<Int,Int>()

		for (i in nums.indices) {
			val num = nums[i]
			val diff = target - num

			if (maps.containsKey(diff)) {
				return intArrayOf(maps.getValue(diff), i)
			}

			maps[num] = i
		}

		return intArrayOf()
	}
}
