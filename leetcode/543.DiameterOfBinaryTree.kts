class TreeNode(var `val`: Int) {
	var left: TreeNode? = null
	var right: TreeNode? = null
}

class Solution {
	fun diameterOfBinaryTree(root: TreeNode?): Int {
		var result = 0

		fun dfs(node: TreeNode?): Int {
			if (node == null) {
				return 0
			}

			val left = dfs(node.left)
			val right = dfs(node.right)

			result = result.coerceAtLeast(left + right)

			return maxOf(left, right) + 1
		}

		dfs(root)

		return result
	}
}
