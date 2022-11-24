package questions

import "math"

func minWindow(s string, t string) string {
	//var MAX = 9223372036854775807
	var MAX = int(math.Inf(1))
	if t == "" {
		return ""
	}

	tMap := make(map[string]int, len(t))
	for _, char := range t {
		if _, ok := tMap[string(char)]; !ok {
			tMap[string(char)] = 0
		}
		tMap[string(char)]++
	}

	window := make(map[string]int)

	have := 0
	need := len(tMap)
	result := []int{-1, -1}
	length := MAX
	left := 0

	for right := 0; right < len(s); right++ {
		char := string(s[right])
		if _, ok := window[char]; !ok {
			window[char] = 0
		}
		window[char]++

		if _, ok := tMap[char]; ok && window[char] == tMap[char] {
			have++
		}

		for have == need {
			if (right - left + 1) < length {
				result = []int{left, right}
				length = right - left + 1
			}
			window[string(s[left])]--
			if _, ok := tMap[string(s[left])]; ok && window[string(s[left])] < tMap[string(s[left])] {
				have--
			}
			left++
		}
	}

	if length == MAX {
		return ""
	}

	l, r := result[0], result[1]

	return s[l : r+1]
}
