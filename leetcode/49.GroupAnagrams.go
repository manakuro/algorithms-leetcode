package leetcode

import "fmt"

func groupAnagrams(strs []string) [][]string {
	if len(strs) == 0 {
		return [][]string{}
	}

	maps := make(map[string][]string)

	for _, word := range strs {
		count := make(map[string]int)
		for i := 0; i < len(word); i++ {
			char := string(word[i])
			if _, ok := count[char]; !ok {
				count[char] = 0
			}
			count[char]++
		}

		values, ok := maps[fmt.Sprint(count)]
		if !ok {
			values = []string{}
		}

		values = append(values, word)
		maps[fmt.Sprint(count)] = values
	}

	var result [][]string
	for _, value := range maps {
		result = append(result, value)
	}

	return result
}
