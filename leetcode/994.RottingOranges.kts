class Solution {
	fun orangesRotting(grid: Array<IntArray>): Int {
		val queue = mutableListOf<Pair<Int, Int>>()
		var time = 0
		var fresh = 0
		val rows = grid.size
		val cols = grid[0].size
		val directions = listOf(1 to 0, -1 to 0, 0 to 1, 0 to -1)

		for (r in 0 until rows) {
			for (c in 0 until cols) {
				if (grid[r][c] == 1) {
					fresh++
				}
				if (grid[r][c] == 2) {
					queue.add(r to c)
				}
			}
		}

		while (queue.isNotEmpty() && fresh > 0) {
			val length = queue.size
			for (i in 0 until length) {
				val (r, c) = queue.removeAt(0)

				for ((dr, dc) in directions) {
					val neighborRow = r + dr
					val neighborCol = c + dc

					if (neighborRow < 0) {
						continue
					}
					if (neighborRow >= rows) {
						continue
					}
					if (neighborCol < 0) {
						continue
					}
					if (neighborCol >= cols) {
						continue
					}
					if (grid[neighborRow][neighborCol] != 1) {
						continue
					}

					grid[neighborRow][neighborCol] = 2
					queue.add(neighborRow to neighborCol)
					fresh--
				}
			}
			time++
		}

		if (fresh != 0) {
			return -1
		}

		return time
	}
}
