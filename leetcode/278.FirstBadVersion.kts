import kotlin.math.floor

class Solution {
	private fun isBadVersion(version: Int): Boolean {
		return version < 10
	}

	fun firstBadVersion(n: Int): Int {
		var left = 0
		var right = n
		var result = 0

		while (left <= right) {
			val middle = floor(((left + right) / 2).toDouble()).toInt()
			if (isBadVersion(middle)) {
				result = middle
				right = middle - 1
			} else {
				left = middle + 1
			}
		}

		return result
	}
}
