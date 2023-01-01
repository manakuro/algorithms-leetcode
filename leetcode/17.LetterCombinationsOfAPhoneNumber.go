package leetcode

func letterCombinations(digits string) []string {
	if len(digits) == 0 {
		return []string{}
	}

	phone := map[string][]string{
		"2": {"a", "b", "c"},
		"3": {"d", "e", "f"},
		"4": {"g", "h", "i"},
		"5": {"j", "k", "l"},
		"6": {"m", "n", "o"},
		"7": {"p", "q", "r", "s"},
		"8": {"t", "u", "v"},
		"9": {"w", "x", "y", "z"},
	}

	var result []string
	var dfs func(i int, current string)

	dfs = func(i int, current string) {
		if len(current) == len(digits) {
			result = append(result, current)
		}

		if i >= len(digits) {
			return
		}

		digit := string(digits[i])
		letters, _ := phone[digit]

		for _, letter := range letters {
			dfs(i+1, current+letter)
		}
	}

	dfs(0, "")

	return result
}
