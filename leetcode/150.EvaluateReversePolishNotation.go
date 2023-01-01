package leetcode

import (
	"math"
	"strconv"
)

func evalRPN(tokens []string) int {
	var stack []string

	calc := func(num1 int, num2 int, operator string) int {
		switch operator {
		case "+":
			return num1 + num2
		case "-":
			return num1 - num2
		case "/":
			return int(math.Trunc(float64(num1 / num2)))
		case "*":
			return num1 * num2
		}

		panic("Invalid value")
	}

	for _, token := range tokens {
		if token == "+" || token == "-" || token == "/" || token == "*" {
			num2, _ := strconv.Atoi(stack[len(stack)-1])
			num1, _ := strconv.Atoi(stack[len(stack)-2])

			stack = stack[:len(stack)-2]

			stack = append(stack, strconv.Itoa(calc(num1, num2, token)))
			continue
		}
		stack = append(stack, token)
	}

	result, _ := strconv.Atoi(stack[0])
	return result
}
