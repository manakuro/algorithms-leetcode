package leetcode

import "math"

func leastInterval(tasks []byte, n int) int {
	countOfTask := make([]int, 26)

	max := 0
	A := int('A')

	for _, task := range tasks {
		index := int(task) - A
		countOfTask[index]++
		if countOfTask[index] > max {
			max = countOfTask[index]
		}
	}

	taskCount := 0
	for _, count := range countOfTask {
		if count == max {
			taskCount++
		}
	}

	return int(math.Max(float64((max-1)*(n+1)+taskCount), float64(len(tasks))))
}
