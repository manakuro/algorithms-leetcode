package leetcode

import "math"

func characterReplacement(s string, k int) int {
	frequencyMap := make(map[string]int)
	result := 0

	left := 0
	for right := 0; right < len(s); right++ {
		letter := string(s[right])

		if _, ok := frequencyMap[letter]; !ok {
			frequencyMap[letter] = 0
		}
		frequencyMap[letter]++

		for {
			longest := 0
			for _, freq := range frequencyMap {
				if longest < freq {
					longest = freq
				}
			}
			window := right - left + 1
			isValidWindow := window-longest > k

			if !isValidWindow {
				break
			}

			frequencyMap[string(s[left])]--
			left++
		}

		window := right - left + 1
		result = int(math.Max(float64(result), float64(window)))
	}

	return result
}
