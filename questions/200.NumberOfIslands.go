package questions

import "strconv"

func numIslands(grid [][]byte) int {
	if len(grid) == 0 {
		return 0
	}

	rows := len(grid)
	cols := len(grid[0])
	visited := make(map[string]struct{})
	islands := 0
	directions := [][]int{
		{1, 0},
		{-1, 0},
		{0, 1},
		{0, -1},
	}

	var traverse func(row int, col int)

	traverse = func(row int, col int) {
		var queue [][]int

		visited[toSetKey(row, col)] = struct{}{}
		queue = append(queue, []int{row, col})

		for len(queue) > 0 {
			popped := queue[0]
			queue = queue[1:]

			r, c := popped[0], popped[1]

			for _, direction := range directions {
				neighborRow := r + direction[0]
				neighborCol := c + direction[1]

				if _, ok := visited[toSetKey(neighborRow, neighborCol)]; ok {
					continue
				}

				if neighborRow >= 0 &&
					neighborRow < rows &&
					neighborCol >= 0 &&
					neighborCol < cols &&
					string(grid[neighborRow][neighborCol]) == "1" {
					queue = append(queue, []int{neighborRow, neighborCol})
					visited[toSetKey(neighborRow, neighborCol)] = struct{}{}
				}
			}
		}
	}

	for r := 0; r < rows; r++ {
		for c := 0; c < cols; c++ {
			if _, ok := visited[toSetKey(r, c)]; ok {
				continue
			}

			if string(grid[r][c]) == "1" {
				traverse(r, c)
				islands++
			}
		}
	}

	return islands
}

func toSetKey(r, c int) string {
	return strconv.Itoa(r) + "," + strconv.Itoa(c)
}
