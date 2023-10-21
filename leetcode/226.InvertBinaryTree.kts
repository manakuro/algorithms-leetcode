class TreeNode(var `val`: Int) {
	var left: TreeNode? = null
	var right: TreeNode? = null
}

class Solution {
	fun invertTree(root: TreeNode?): TreeNode? {
		if (root == null) {
			return null
		}

		val tmp = root.left
		root.left = root.right
		root.right = tmp

		invertTree(root.left)
		invertTree(root.right)

		return root
	}
}
