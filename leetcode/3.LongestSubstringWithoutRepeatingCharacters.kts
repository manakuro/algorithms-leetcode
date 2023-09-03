class Solution {
	fun lengthOfLongestSubstring(s: String): Int {
		var left = 0
		var result = 0
		var maps = mutableMapOf<Char, Unit>()

		for (right in s.indices) {
			while (maps.containsKey(s[right])) {
				maps.remove(s[left])
				left++
			}

			maps[s[right]] = Unit
			result = result.coerceAtLeast(right - left + 1)
		}

		return result
	}
}
