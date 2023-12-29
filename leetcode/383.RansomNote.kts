class Solution {
	fun canConstruct(ransomNote: String, magazine: String): Boolean {
		val ransomeNoteMap = mutableMapOf<Char, Int>()
		for (r in ransomNote) {
			ransomeNoteMap[r] = ransomeNoteMap.getOrDefault(r, 0) + 1
		}

		val magazineMap = mutableMapOf<Char, Int>()
		for (m in magazine) {
			magazineMap[m] = magazineMap.getOrDefault(m, 0) + 1
		}

		for (r in ransomNote) {
			if (!magazineMap.containsKey(r) || magazineMap[r]!! < ransomeNoteMap[r]!!) {
				return false
			}
		}

		return true
	}

	fun canConstruct2(ransomNote: String, magazine: String): Boolean {
		val ransomNoteMaps = ransomNote.groupingBy { it }.eachCount()
		val magazineMaps = magazine.groupingBy { it }.eachCount()

		return ransomNoteMaps.all { (char, count) -> magazineMaps.getOrDefault(char, 0) >= count }
	}
}
