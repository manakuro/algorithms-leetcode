class Solution {
	fun combinationSum(candidates: IntArray, target: Int): List<List<Int>> {
		val result = mutableListOf<List<Int>>()
		val path = mutableListOf<Int>()

		fun dfs(startIndex: Int, sum: Int) {
			if (sum == target) {
				result.add(path.toList())
				return
			}

			for (i in startIndex until candidates.size) {
				val candidate = candidates[i]
				if (sum + candidate > target) continue

				path.add(candidate)
				dfs(i, sum + candidate)
				path.removeAt(path.size - 1)
			}
		}

		dfs(0, 0)

		return result
	}
}
