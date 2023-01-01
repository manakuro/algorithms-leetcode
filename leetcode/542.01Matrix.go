package leetcode

import "strconv"

func updateMatrix(mat [][]int) [][]int {
	rows := len(mat)
	columns := len(mat[0])
	var queue [][]int
	directions := [][]int{
		{1, 0},
		{-1, 0},
		{0, 1},
		{0, -1},
	}
	result := make([][]int, rows)
	visited := make(map[string]struct{})

	for r := 0; r < rows; r++ {
		result[r] = []int{}
		for c := 0; c < columns; c++ {
			result[r] = append(result[r], 0)
			if mat[r][c] == 0 {
				queue = append(queue, []int{r, c})
				visited[strconv.Itoa(r)+","+strconv.Itoa(c)] = struct{}{}
			}
		}
	}

	distance := 0
	for len(queue) > 0 {
		length := len(queue)
		for i := 0; i < length; i++ {
			popped := queue[0]
			queue = queue[1:]

			r, c := popped[0], popped[1]

			if r < rows && c < columns && mat[r][c] == 1 {
				result[r][c] = distance
			}

			for _, direction := range directions {
				neighborRow := r + direction[0]
				neighborColumn := c + direction[1]

				if neighborRow < 0 {
					continue
				}
				if neighborRow > rows {
					continue
				}
				if neighborColumn < 0 {
					continue
				}
				if neighborColumn > columns {
					continue
				}

				_, ok := visited[strconv.Itoa(neighborRow)+","+strconv.Itoa(neighborColumn)]
				if ok {
					continue
				}

				queue = append(queue, []int{neighborRow, neighborColumn})
				visited[strconv.Itoa(neighborRow)+","+strconv.Itoa(neighborColumn)] = struct{}{}
			}
		}

		distance++
	}

	return result
}
