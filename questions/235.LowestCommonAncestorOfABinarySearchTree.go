package questions

func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	current := root

	for current != nil {
		if p.Val > current.Val && q.Val > current.Val {
			current = current.Right
		} else if p.Val < current.Val && q.Val < current.Val {
			current = current.Left
		} else {
			return current
		}
	}

	return root
}

//tree := &TreeNode{Val: 6}
//tree.Left = &TreeNode{Val: 2}
//tree.Left.Left = &TreeNode{Val: 0}
//tree.Left.Right = &TreeNode{Val: 4}
//tree.Left.Right.Left = &TreeNode{Val: 3}
//tree.Left.Right.Right = &TreeNode{Val: 5}
//
//tree.Right = &TreeNode{Val: 8}
//tree.Right.Left = &TreeNode{Val: 7}
//tree.Right.Right = &TreeNode{Val: 9}
//
//
//result := lowestCommonAncestor(tree, tree.Left, tree.Right)
//
//fmt.Printf("%+v", result)
