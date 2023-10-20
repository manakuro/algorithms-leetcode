import java.util.*

class Solution {
	fun isPalindrome(s: String): Boolean {
		val reg = Regex("[^a-zA-Z0-9]+")
		var str = s.lowercase(Locale.getDefault())
		str = reg.replace(str, "")

		var start = 0
		var end = str.length - 1


		while (start <= end) {
			if (str[start] != str[end]) {
				return false
			}
			start++
			end--
		}

		return true
	}
}
