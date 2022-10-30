package questions

import "math"

func isValidBST(root *TreeNode) bool {
	var traverse func(node *TreeNode, left float64, right float64) bool

	traverse = func(node *TreeNode, left float64, right float64) bool {
		if node == nil {
			return true
		}
		if !(float64(node.Val) > left && float64(node.Val) < right) {
			return false
		}

		return traverse(node.Left, left, float64(node.Val)) && traverse(node.Right, float64(node.Val), right)
	}

	return traverse(root, math.Inf(-1), math.Inf(1))
}
