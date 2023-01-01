package leetcode

func wordBreak(s string, wordDict []string) bool {
	mappings := make(map[int]bool)
	var traverse func(i int) bool

	traverse = func(i int) bool {
		if b, ok := mappings[i]; ok {
			return b
		}
		if i > len(s)-1 {
			return true
		}

		isMatched := false
		for _, word := range wordDict {
			length := len(word)
			if (i + length) > len(s) {
				continue
			}

			if s[i:i+length] == word {
				nextMatched := traverse(i + length)
				if nextMatched {
					isMatched = true
					break
				}
			}
		}
		mappings[i] = isMatched
		return isMatched
	}

	return traverse(0)
}
