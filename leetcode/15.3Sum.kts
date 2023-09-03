class Solution {
	fun threeSum(nums: IntArray): List<List<Int>> {
		var result = mutableListOf<List<Int>>()

		nums.sort()

		for (i in nums.indices) {
			val num = nums[i]

			if (i - 1 >= 0 && num == nums[i - 1]) {
				continue
			}
			if (num > 0) {
				break
			}

			var left = i + 1
			var right = nums.size - 1

			while (left < right) {
				val sum = num + nums[left] + nums[right]
				when {
					sum > 0 -> right--
					sum < 0 -> left++
					else -> {
						result.add(listOf(num, nums[left], nums[right]))
						left++

						while (left < right && nums[left] == nums[left-1]) {
							left++
						}
					}
				}
			}
		}

		return result
	}
}
