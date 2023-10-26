import kotlin.math.abs

class TreeNode(var `val`: Int = 0) {
	var left: TreeNode? = null
	var right: TreeNode? = null
}

class Solution {
	data class Balance(val height: Int, val isBalanced: Boolean)

	fun isBalanced(root: TreeNode?): Boolean {
		fun dfs(node: TreeNode?): Balance {
			if (node == null) {
				return Balance(0, true)
			}

			val left = dfs(node.left)
			val right = dfs(node.right)
			val isBalancedTree = left.isBalanced && right.isBalanced && abs(left.height - right.height) <= 1

			return Balance(maxOf(left.height, right.height) + 1, isBalancedTree)
		}

		return dfs(root).isBalanced
	}
}
