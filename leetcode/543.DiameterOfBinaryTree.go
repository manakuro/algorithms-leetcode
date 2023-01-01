package leetcode

import "math"

func diameterOfBinaryTree(root *TreeNode) int {
	var traverse func(node *TreeNode) int
	result := 0

	traverse = func(node *TreeNode) int {
		if node == nil {
			return 0
		}

		left := traverse(node.Left)
		right := traverse(node.Right)

		result = int(math.Max(float64(result), float64(left)+float64(right)))

		return 1 + int(math.Max(float64(left), float64(right)))
	}

	traverse(root)

	return result
}
