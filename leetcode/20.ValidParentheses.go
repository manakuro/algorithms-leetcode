package leetcode

func isValid(s string) bool {
	var stack []string
	obj := map[string]string{
		"(": ")",
		"{": "}",
		"[": "]",
	}

	for _, char := range s {
		mapped, ok := obj[string(char)]
		if ok {
			stack = append(stack, mapped)
			continue
		}
		if len(stack) > 0 && stack[len(stack)-1] == string(char) {
			stack = stack[:len(stack)-1]
			continue
		}

		return false
	}

	return len(stack) == 0
}
