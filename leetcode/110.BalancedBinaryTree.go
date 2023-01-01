package leetcode

import "math"

type Traverse struct {
	Height     int
	IsBalanced bool
}

func isBalanced(root *TreeNode) bool {
	return traverse(root).IsBalanced
}
func traverse(node *TreeNode) Traverse {
	if node == nil {
		return Traverse{Height: 0, IsBalanced: true}
	}

	left := traverse(node.Left)
	right := traverse(node.Right)
	b := left.IsBalanced && right.IsBalanced && math.Abs(float64(left.Height-right.Height)) <= 1

	return Traverse{
		IsBalanced: b,
		Height:     1 + int(math.Max(float64(left.Height), float64(right.Height))),
	}
}

//tree := &TreeNode{Val: 3}
//tree.Left = &TreeNode{Val: 9}
//
//tree.Right = &TreeNode{Val: 20}
//tree.Right.Left = &TreeNode{Val: 15}
//tree.Right.Right = &TreeNode{Val: 7}
//
//result := isBalanced(tree)
//
//fmt.Printf("%+v", result)
