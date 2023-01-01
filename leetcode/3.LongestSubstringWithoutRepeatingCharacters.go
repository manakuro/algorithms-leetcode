package leetcode

import "math"

func lengthOfLongestSubstring(s string) int {
	set := make(map[string]struct{})
	left := 0
	result := 0

	for right := range s {
		length := len(set)
		for i := 0; i < length; i++ {
			_, ok := set[string(s[right])]
			if ok {
				delete(set, string(s[left]))
				left++
			}
		}

		set[string(s[right])] = struct{}{}
		result = int(math.Max(float64(result), float64(right-left+1)))
	}

	return result
}
