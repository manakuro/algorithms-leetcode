package questions

import "math"

type Treenode110 struct {
	Val   int
	Left  *Treenode110
	Right *Treenode110
}

type Traverse110 struct {
	Height     int
	IsBalanced bool
}

func isBalanced(root *Treenode110) bool {
	return traverse(root).IsBalanced
}
func traverse(node *Treenode110) Traverse110 {
	if node == nil {
		return Traverse110{Height: 0, IsBalanced: true}
	}

	left := traverse(node.Left)
	right := traverse(node.Right)
	b := left.IsBalanced && right.IsBalanced && math.Abs(float64(left.Height-right.Height)) <= 1

	return Traverse110{
		IsBalanced: b,
		Height:     1 + int(math.Max(float64(left.Height), float64(right.Height))),
	}
}

//tree := &TreeNode_110{Val: 3}
//tree.Left = &TreeNode_110{Val: 9}
//
//tree.Right = &TreeNode_110{Val: 20}
//tree.Right.Left = &TreeNode_110{Val: 15}
//tree.Right.Right = &TreeNode_110{Val: 7}
//
//result := isBalanced(tree)
//
//fmt.Printf("%+v", result)
