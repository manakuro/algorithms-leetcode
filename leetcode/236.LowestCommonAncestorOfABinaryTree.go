package leetcode

func lowestCommonAncestorOfBinaryTree(root, p, q *TreeNode) *TreeNode {
	var traverse func(node *TreeNode) *TreeNode

	traverse = func(node *TreeNode) *TreeNode {
		if node == nil {
			return nil
		}
		if node.Val == p.Val {
			return node
		}
		if node.Val == q.Val {
			return node
		}

		left := traverse(node.Left)
		right := traverse(node.Right)

		if left != nil && right != nil {
			return node
		}

		if left != nil {
			return left
		}

		return right
	}

	return traverse(root)
}
