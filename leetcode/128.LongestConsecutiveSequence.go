package leetcode

import "math"

func longestConsecutive(nums []int) int {
	maps := make(map[int]struct{})
	for _, num := range nums {
		maps[num] = struct{}{}
	}

	result := 0
	length := 0

	for _, num := range nums {
		_, ok := maps[num-1]
		isStartSequence := !ok

		if isStartSequence {
			length = 0
			for {
				if _, ok = maps[num+length]; !ok {
					break
				}
				length++
			}
			result = int(math.Max(float64(length), float64(result)))
		}
	}

	return result
}
