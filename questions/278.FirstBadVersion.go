package questions

import "math"

func firstBadVersion(n int) int {
	start := 1
	end := n
	result := n

	for end >= start {
		middle := int(math.Floor(float64(start+end) / 2))
		if isBadVersion(middle) {
			result = middle
			end = middle - 1
		} else {
			start = middle + 1
		}
	}
	return result
}

func isBadVersion(version int) bool {
	return version == 4
}
