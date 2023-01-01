package leetcode

import "math"

func longestPalindrome(s string) int {
	mappings := make(map[string]int)

	for _, char := range s {
		_, ok := mappings[string(char)]
		if !ok {
			mappings[string(char)] = 0
		}
		mappings[string(char)] += 1
	}

	count := 0
	for _, m := range mappings {
		count += int(math.Floor(float64(m/2))) * 2

		if count%2 == 0 && m%2 == 1 {
			count += 1
		}
	}

	return count
}

//result := longestPalindrome("abccccdd")
//
//fmt.Printf("%+v", result)
