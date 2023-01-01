package leetcode

import (
	"math"
	"strconv"
)

func myAtoi(s string) int {
	result := 0
	sign := 1
	found := false

	for _, char := range s {
		word := string(char)

		isWhiteSpace := word == " "
		hasWhiteSpaceWithinNumbers := isWhiteSpace && found
		isPlusSign := word == "+"
		isMinusSign := word == "-"

		if hasWhiteSpaceWithinNumbers {
			break
		}

		if isWhiteSpace {
			continue
		}

		if _, err := strconv.Atoi(word); err == nil {
			found = true
			result = addNumber(result, word)
			continue
		}

		if isPlusSign && !found {
			found = true
			continue
		}

		if isMinusSign && !found {
			found = true
			sign *= -1
			continue
		}

		break
	}

	result *= sign

	max := math.Max(float64(-int(math.Pow(float64(2), float64(31)))), float64(result))

	return int(math.Min(max, float64(int(math.Pow(2, 31))-1)))
}

func addNumber(n int, val string) int {
	num, _ := strconv.Atoi(val)

	return n*10 + num
}
