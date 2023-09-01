class Solution {
	fun updateMatrix(mat: Array<IntArray>): Array<IntArray> {
		val rows = mat.size
		val cols = mat[0].size
		val queue = mutableListOf<Pair<Int,Int>>()
		val directions = listOf(Pair(1, 0), Pair(-1, 0), Pair(0, 1), Pair(0, -1))
		val result = Array(rows) { IntArray(cols) }
		val visited = mutableSetOf<Pair<Int, Int>>()

		for (r in 0 until rows) {
			for (c in 0 until cols) {
				result[r][c] = 0
				if (mat[r][c] == 0) {
					queue.add(Pair(r, c))
					visited.add(Pair(r, c))
				}
			}
		}

		var distance = 0
		while (queue.isNotEmpty()) {
			val length = queue.size
			for (i in 0 until length) {
				val popped = queue.removeAt(0)
				val (r, c) = popped

				if (r < rows && c < cols && mat[r][c] == 1) {
					result[r][c] = distance
				}

				for (direction in directions) {
					val neighborRow = r + direction.first
					val neighborCol = c + direction.second

					if (neighborRow < 0) {
						continue
					}
					if (neighborRow > rows) {
						continue
					}
					if (neighborCol < 0) {
						continue
					}
					if (neighborCol > cols) {
						continue
					}
					if (visited.contains(Pair(neighborRow, neighborCol))) {
						continue
					}

					queue.add(Pair(neighborRow, neighborCol))
					visited.add(Pair(neighborRow, neighborCol))
				}
			}
			distance++
		}

		return result
	}
}
