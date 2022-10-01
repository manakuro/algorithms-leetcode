package questions

type TreeNode226 struct {
	Val   int
	Left  *TreeNode226
	Right *TreeNode226
}

func invertTree(root *TreeNode226) *TreeNode226 {
	if root == nil {
		return nil
	}

	tmp := root.Left
	root.Left = root.Right
	root.Right = tmp

	invertTree(root.Left)
	invertTree(root.Right)

	return root
}
