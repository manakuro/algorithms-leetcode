class TreeNode(var `val`: Int) {
	var left: TreeNode?= null
	var right: TreeNode?= null
}

class Solution {
	fun rightSideView(root: TreeNode?): List<Int> {
		val queue = mutableListOf<TreeNode?>()
		val result = mutableListOf<Int>()

		queue.add(root)

		while (queue.isNotEmpty()) {
			val length = queue.size
			var right: TreeNode? = null
			for (i in 0 until length) {
				val node = queue.removeFirst()
				if (node != null) {
					right = node
					queue.add(node.left)
					queue.add(node.right)
				}
			}
			if (right != null) {
				result.add(right.`val`)
			}
		}

		return result
	}
}
