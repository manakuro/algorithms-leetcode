class TreeNode(var `val`: Int = 0) {
	var left: TreeNode? = null
	var right: TreeNode? = null
}

class Solution {
	fun lowestCommonAncestor(root: TreeNode?, p: TreeNode?, q: TreeNode?): TreeNode? {
		var current = root

		while (current != null) {
			if (current.`val` > p!!.`val` && current.`val` > q!!.`val`) {
				current = current.left
			} else if (current.`val` < p!!.`val` && current.`val` < q!!.`val`) {
				current = current.right
			} else {
				return current
			}
		}

		return null
	}
}
