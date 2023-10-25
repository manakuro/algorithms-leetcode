class Solution {
	fun floodFill(image: Array<IntArray>, sr: Int, sc: Int, newColor: Int): Array<IntArray> {
		val rows = image.size
		val cols = image[0].size
		val queue: MutableList<IntArray> = mutableListOf()
		val visited = Array(rows) { BooleanArray(cols) }
		val directions = listOf(
				intArrayOf(1, 0),
				intArrayOf(-1, 0),
				intArrayOf(0, 1),
				intArrayOf(0, -1)
		)

		val target = image[sr][sc]
		image[sr][sc] = newColor
		visited[sr][sc] = true

		queue.add(intArrayOf(sr, sc))
		while (queue.isNotEmpty()) {
			val (row, col) = queue.removeAt(0)
			for (direction in directions) {
				val neighborRow = row + direction[0]
				val neighborCol = col + direction[1]

				if (neighborRow < 0 || neighborRow >= rows || neighborCol < 0 || neighborCol >= cols)
					continue
				if (visited[neighborRow][neighborCol]) continue
				if (image[neighborRow][neighborCol] != target) continue

				image[neighborRow][neighborCol] = newColor
				queue.add(intArrayOf(neighborRow, neighborCol))
				visited[neighborRow][neighborCol] = true
			}
		}

		return image
	}

}
