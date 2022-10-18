package questions

import "math"

func insert(intervals [][]int, newInterval []int) [][]int {
	var result [][]int

	for i, interval := range intervals {
		// e.g. insert([[6,7], [8,9]], [2,5])
		// [[2,5], [6,7], [8,9]]
		if newInterval[1] < interval[0] {
			result = append(result, newInterval)
			return append(result, intervals[i:]...)
		}

		// e.g. insert([[1,3], [6,9]], [4,5])
		// [[1,3], [4,5]]
		if newInterval[0] > interval[1] {
			result = append(result, interval)
			continue
		}

		newInterval = []int{
			int(math.Min(float64(newInterval[0]), float64(interval[0]))),
			int(math.Max(float64(newInterval[1]), float64(interval[1]))),
		}
	}
	result = append(result, newInterval)

	return result
}
