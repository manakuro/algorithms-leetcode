class Solution {
	fun permute(nums: IntArray): List<List<Int>> {
		val result = mutableListOf<List<Int>>()
		val path = mutableListOf<Int>()
		val visited = mutableMapOf<Int, Boolean>()

		fun dfs(startIndex: Int) {
			if (startIndex == nums.size) {
				result.add(path.toList())
				return
			}

			for (i in nums.indices) {
				if (visited[i] == true) continue

				path.add(nums[i])
				visited[i] = true
				dfs(startIndex + 1)
				path.removeAt(path.size-1)
				visited[i] = false
			}
		}

		dfs(0)

		return result
	}
}
