class Solution {
	fun isValid(s: String): Boolean {
		val stack = mutableListOf<String>()
		val maps = mapOf(Pair("(", ")"), Pair("{", "}"), Pair("[", "]"))

		for (i in s.indices) {
			val str = s[i].toString()
			if (maps.containsKey(str)) {
				stack.add(maps.getValue(str))
				continue
			}
			if (stack.isNotEmpty() && stack.last() == str) {
				stack.removeLast()
				continue
			}

			return false
		}

		return stack.size == 0
	}
}
