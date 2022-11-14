package questions

func longestPalindromeSubstring(s string) string {
	result := ""
	length := 0

	for i := 0; i < len(s); i++ {
		left := i
		right := i
		for left >= 0 && right < len(s) && s[left] == s[right] {
			if right-left+1 > length {
				result = s[left : right+1]
				length = right - left + 1
			}
			left--
			right++
		}

		left = i
		right = i + 1
		for left >= 0 && right < len(s) && s[left] == s[right] {
			if right-left+1 > length {
				result = s[left : right+1]
				length = right - left + 1
			}
			left--
			right++
		}
	}

	return result
}
