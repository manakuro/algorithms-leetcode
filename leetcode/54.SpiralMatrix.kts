class Solution {
	fun spiralOrder(matrix: Array<IntArray>): List<Int> {
		val result = mutableListOf<Int>()
		var left = 0
		var right = matrix[0].size
		var top = 0
		var bottom = matrix.size

		while (left < right && top < bottom) {
			for (i in left until right) {
				result.add(matrix[top][i])
			}
			top++

			for (i in top until  bottom) {
				result.add(matrix[i][right-1])
			}
			right--

			if (!(left < right && top < bottom)) {
				break
			}

			for (i in right - 1 downTo left) {
				result.add(matrix[bottom-1][i])
			}
			bottom--

			for (i in bottom - 1 downTo top) {
				result.add(matrix[i][left])
			}
			left++
		}

		return result
	}
}
