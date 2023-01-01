package leetcode

import (
	"regexp"
	"strings"
)

func isPalindrome(s string) bool {
	reg := regexp.MustCompile(`[^a-zA-Z0-9]+`)

	s = strings.ToLower(s)
	s = reg.ReplaceAllString(s, "")

	start := 0
	end := len(s) - 1

	for start <= end {
		if s[start] != s[end] {
			return false
		}

		start++
		end--
	}

	return true
}
