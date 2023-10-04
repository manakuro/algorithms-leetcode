class TreeNode(var `val`: Int) {
	var left: TreeNode? = null
	var right: TreeNode? = null
}

class Solution {
	fun buildTree(preorder: IntArray, inorder: IntArray): TreeNode? {
		if (preorder.isEmpty()) {
			return null
		}
		if (inorder.isEmpty()) {
			return null
		}

		val root = TreeNode(preorder[0])
		val middleIndex = inorder.indexOf(preorder[0])

		root.left = buildTree(preorder.slice(1 until middleIndex + 1).toIntArray(), inorder.slice(0 until middleIndex).toIntArray())
		root.right = buildTree(preorder.slice(middleIndex + 1 until preorder.size).toIntArray(), inorder.slice(middleIndex + 1 until inorder.size).toIntArray())

		return root
	}
}
