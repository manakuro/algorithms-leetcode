class Solution {
	fun longestPalindrome(s: String): Int {
		val maps = s.groupingBy { it }.eachCount()

		var count = 0
		for (key in maps.keys) {
			count += (maps[key]!! / 2) * 2

			if (count % 2 == 0 && maps[key]!! % 2 == 1) {
				count += 1
			}
		}

		return count
	}
}
