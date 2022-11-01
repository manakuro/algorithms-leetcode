package questions

func orangesRotting(grid [][]int) int {
	var queue [][]int
	time := 0
	fresh := 0

	rows := len(grid)
	cols := len(grid[0])

	for r := 0; r < rows; r++ {
		for c := 0; c < cols; c++ {
			if grid[r][c] == 1 {
				fresh++
			}
			if grid[r][c] == 2 {
				queue = append(queue, []int{r, c})
			}
		}
	}

	directions := [][]int{
		{1, 0},
		{-1, 0},
		{0, 1},
		{0, -1},
	}

	for len(queue) > 0 && fresh > 0 {
		length := len(queue)
		for i := 0; i < length; i++ {
			popped := queue[0]
			queue = queue[1:]

			r, c := popped[0], popped[1]

			for _, direction := range directions {
				neighborRow := r + direction[0]
				neighborCol := c + direction[1]

				if neighborRow < 0 {
					continue
				}
				if neighborRow >= rows {
					continue
				}
				if neighborCol < 0 {
					continue
				}
				if neighborCol >= cols {
					continue
				}

				if grid[neighborRow][neighborCol] != 1 {
					continue
				}

				grid[neighborRow][neighborCol] = 2
				queue = append(queue, []int{neighborRow, neighborCol})
				fresh--
			}
		}
		time++
	}

	if fresh != 0 {
		return -1
	}

	return time
}
