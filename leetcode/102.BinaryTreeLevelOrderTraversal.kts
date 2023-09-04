class TreeNode(var `val`: Int) {
	var left: TreeNode? = null
	var right: TreeNode? = null
}

class Solution {
	fun levelOrder(root: TreeNode?): List<List<Int>> {
		val result = mutableListOf<List<Int>>()
		val queue = mutableListOf<TreeNode?>()

		queue.add(root)

		while (queue.isNotEmpty()) {
			val size = queue.size
			val nodes = mutableListOf<Int>()

			for (i in 0 until size) {
				val node = queue.removeAt(0)

				node?.let { n ->
					nodes.add(n.`val`)
					n.left?.let { queue.add(it) }
					n.right?.let { queue.add(it) }
				}
			}

			if (nodes.isNotEmpty()) {
				result.add(nodes)
			}
		}

		return result
	}
}
