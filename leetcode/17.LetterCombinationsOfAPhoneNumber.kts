class Solution {
	fun letterCombinations(digits: String): List<String> {
		if (digits.isEmpty()) {
			return listOf()
		}

		val result = mutableListOf<String>()
		val numbers = mapOf(
				'2' to listOf("a", "b", "c"),
				'3' to listOf("d", "e", "f"),
				'4' to listOf("g", "h", "i"),
				'5' to listOf("j", "k", "l"),
				'6' to listOf("m", "n", "o"),
				'7' to listOf("p", "q", "r", "s"),
				'8' to listOf("t", "u", "v"),
				'9' to listOf("w", "x", "y", "z")
		)


		fun dfs(startIndex: Int, path: MutableList<String>) {
			if (startIndex == digits.length) {
				result.add(path.joinToString(""))
				return
			}
			if (startIndex >= digits.length) {
				return
			}

			val digit = digits[startIndex]
			val words = numbers[digit]

			words?.forEach { word ->
				path.add(word)
				dfs(startIndex + 1, path)
				path.removeAt(path.size - 1)
			}
		}

		dfs(0, mutableListOf())

		return result
	}
}
