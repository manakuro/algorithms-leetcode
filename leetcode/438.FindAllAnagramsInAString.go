package leetcode

import "reflect"

func findAnagrams(s string, p string) []int {
	if len(p) > len(s) {
		return []int{}
	}

	sCount := make(map[string]int, len(s))
	pCount := make(map[string]int, len(p))

	for i := 0; i < len(p); i++ {
		if _, ok := pCount[string(p[i])]; !ok {
			pCount[string(p[i])] = 0
		}
		pCount[string(p[i])]++

		if _, ok := sCount[string(s[i])]; !ok {
			sCount[string(s[i])] = 0
		}
		sCount[string(s[i])]++
	}

	var result []int
	if reflect.DeepEqual(pCount, sCount) {
		result = append(result, 0)
	}
	left := 0
	for right := len(p); right < len(s); right++ {
		if _, ok := sCount[string(s[right])]; !ok {
			sCount[string(s[right])] = 0
		}
		sCount[string(s[right])]++
		sCount[string(s[left])]--

		if sCount[string(s[left])] == 0 {
			delete(sCount, string(s[left]))
		}
		left++

		if reflect.DeepEqual(sCount, pCount) {
			result = append(result, left)
		}
	}

	return result
}
