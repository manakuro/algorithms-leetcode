class TreeNode(var `val`: Int = 0) {
	var left: TreeNode? = null
	var right: TreeNode? = null
}

class Solution {
	fun lowestCommonAncestor(root: TreeNode?, p: TreeNode?, q: TreeNode?): TreeNode? {
		fun dfs(node: TreeNode?): TreeNode? {
			if (node == null) {
				return null
			}
			if (node.`val` == p?.`val`) {
				return node
			}
			if (node.`val` == q?.`val`) {
				return node
			}

			val left = dfs(node.left)
			val right = dfs(node.right)

			if (left != null && right != null) {
				return node
			}

			if (left != null) {
				return left
			}

			return right
		}

		return dfs(root)
	}
}
