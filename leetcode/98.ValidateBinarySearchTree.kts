class TreeNode(var `val`: Int) {
	var left: TreeNode? = null
	var right: TreeNode? = null
}

class Solution {
	fun isValidBST(root: TreeNode?): Boolean {
		fun dfs(node: TreeNode?, left: Int, right: Int): Boolean {
			if (node == null) {
				return true
			}
			if (!(node.`val` > left && node.`val` < right)) {
				return false
			}

			return dfs(node.left, left, node.`val`) && dfs(node.right, node.`val`, right)
		}

		return dfs(root, Int.MIN_VALUE, Int.MAX_VALUE)
	}
}
