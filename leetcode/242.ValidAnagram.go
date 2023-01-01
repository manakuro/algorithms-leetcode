package leetcode

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	sMap := make(map[string]int)
	for _, char := range s {
		if _, ok := sMap[string(char)]; !ok {
			sMap[string(char)] = 0
		}
		sMap[string(char)]++
	}

	tMap := make(map[string]int)
	for _, char := range t {
		if _, ok := tMap[string(char)]; !ok {
			tMap[string(char)] = 0
		}
		tMap[string(char)]++
	}

	for _, char := range s {
		if sMap[string(char)] != tMap[string(char)] {
			return false
		}
	}

	return true
}
