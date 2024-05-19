class Solution {
	fun isAnagram(s: String, t: String): Boolean {
		if (s.length != t.length) return false

		val sMap = s.groupingBy { it }.eachCount()
		val tMap = t.groupingBy { it }.eachCount()

		for (char in t) {
			if (sMap[char] != tMap[char]) return false
		}

		return true
	}
}
