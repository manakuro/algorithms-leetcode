import kotlin.math.pow

class Solution {
	fun myAtoi(s: String): Int {
		var result = 0
		var sign = 1
		var found = false

		for (char in s) {
			val word = char.toString()

			val isWhiteSpace = word == " "
			val hasWhiteSpaceWithNumbers = isWhiteSpace && found
			val isPlusSign = word == "+"
			val isMinusSign = word == "-"

			if (hasWhiteSpaceWithNumbers) {
				break
			}
			if (isWhiteSpace) {
				continue
			}
			if (word.toIntOrNull() != null) {
				found = true
				result = addNumber(result, word)
				continue
			}
			if (isPlusSign && !found) {
				found = true
				continue
			}
			if (isMinusSign && !found) {
				found = true
				sign *= -1
				continue
			}

			break
		}

		result *= sign

		val max = (-2.0).pow(31).coerceAtLeast(result.toDouble())

		return (max.coerceAtMost((2.0.pow(31) - 1))).toInt()
	}
	private fun addNumber(n: Int, value: String): Int {
		val num = value.toInt()
		return n * 10 + num
	}
}
