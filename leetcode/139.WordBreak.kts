class Solution {
	fun wordBreak(s: String, wordDict: List<String>): Boolean {
		val maps = mutableMapOf<Int, Boolean>()

		fun dfs(i: Int): Boolean {
			maps[i]?.let { return it }
			if (i > s.length - 1) {
				return true
			}

			var isMatched = false
			for (word in wordDict) {
				val length = word.length
				if ((i + length) > s.length) {
					continue
				}

				if (s.substring(i, i + length) == word) {
					val nextMatched = dfs(i + length)
					if (nextMatched) {
						isMatched = true
						break
					}
				}
			}

			maps[i] = isMatched
			return isMatched
		}

		return dfs(0)
	}
}
