package leetcode

import "strconv"

func calculate(s string) int {
	if len(s) == 0 {
		return 0
	}

	sign := 1
	sum := 0
	var stack []int

	for i := 0; i < len(s); i++ {
		n := string(s[i])

		num, err := strconv.Atoi(n)
		if err == nil {
			for {
				if i+1 >= len(s) {
					break
				}
				num2, err2 := strconv.Atoi(string(s[i+1]))
				if err2 != nil {
					break
				}

				num = num*10 + num2
				i++
			}
			sum += num * sign
		}
		if n == "+" {
			sign = 1
		}
		if n == "-" {
			sign = -1
		}

		if n == "(" {
			stack = append(stack, sum)
			stack = append(stack, sign)
			sum = 0
			sign = 1
		}
		if n == ")" {
			if (len(stack)-1) >= 0 && (len(stack)-2) >= 0 {
				prevSign := stack[len(stack)-1]
				prevSum := stack[len(stack)-2]
				stack = stack[:len(stack)-2]

				sum = prevSign * sum
				sum += prevSum
			}
		}
	}

	return sum
}
