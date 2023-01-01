package leetcode

import (
	"math"
	"sort"
)

func mergeIntervals(intervals [][]int) [][]int {
	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})

	result := [][]int{
		intervals[0],
	}
	for _, interval := range intervals[1:] {
		start, end := interval[0], interval[1]
		lastEnd := result[len(result)-1][1]
		isOverlapping := start <= lastEnd

		if isOverlapping {
			result[len(result)-1][1] = int(math.Max(float64(lastEnd), float64(end)))
		} else {
			result = append(result, []int{start, end})
		}
	}

	return result
}
