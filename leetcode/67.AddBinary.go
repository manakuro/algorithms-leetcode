package leetcode

import (
	"math"
	"strconv"
)

func pad(s string, pad string, length int) string {
	if len(s) >= length {
		return s
	}

	for i := len(s); i < length; i++ {
		s = pad + s
	}
	return s
}

func addBinary(a string, b string) string {
	result := ""
	carry := 0
	max := int(math.Max(float64(len(a)), float64(len(b))))
	padA := pad(a, "0", max)
	padB := pad(b, "0", max)

	for i := max - 1; i >= 0; i-- {
		numA, _ := strconv.Atoi(string(padA[i]))
		numB, _ := strconv.Atoi(string(padB[i]))

		total := numA + numB + carry
		char := strconv.Itoa(total % 2)
		result = char + result
		carry = int(math.Floor(float64(total / 2)))
	}

	if carry != 0 {
		result = "1" + result
	}

	return result
}
