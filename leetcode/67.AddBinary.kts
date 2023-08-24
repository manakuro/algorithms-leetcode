class Solution {
	fun addBinary(a: String, b: String): String {
		var result = ""
		var carry = 0
		val maxLength = maxOf(a.length, b.length)
		val padA = a.padStart(maxLength, '0')
		val padB = b.padStart(maxLength, '0')

		for (i in maxLength - 1 downTo 0) {
			val numA = padA[i].toString().toIntOrNull() ?: 0
			val numB = padB[i].toString().toIntOrNull() ?: 0

			val total = numA + numB + carry
			val char = (total % 2).toString()
			result = char + result
			carry = total / 2
		}

		if (carry != 0) {
			result = "1$result"
		}

		return result
	}
}
