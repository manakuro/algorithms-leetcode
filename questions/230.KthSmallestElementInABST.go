package questions

func kthSmallest(root *TreeNode, k int) int {
	var traverse func(node *TreeNode)
	var result []int
	traverse = func(node *TreeNode) {
		if node == nil {
			return
		}

		traverse(node.Left)
		result = append(result, node.Val)
		traverse(node.Right)
	}

	traverse(root)

	return result[k-1]
}
