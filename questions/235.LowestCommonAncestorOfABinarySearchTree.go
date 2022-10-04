package questions

type TreeNode235 struct {
	Val   int
	Left  *TreeNode235
	Right *TreeNode235
}

func lowestCommonAncestor(root, p, q *TreeNode235) *TreeNode235 {
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

//tree := &TreeNode235{Val: 6}
//tree.Left = &TreeNode235{Val: 2}
//tree.Left.Left = &TreeNode235{Val: 0}
//tree.Left.Right = &TreeNode235{Val: 4}
//tree.Left.Right.Left = &TreeNode235{Val: 3}
//tree.Left.Right.Right = &TreeNode235{Val: 5}
//
//tree.Right = &TreeNode235{Val: 8}
//tree.Right.Left = &TreeNode235{Val: 7}
//tree.Right.Right = &TreeNode235{Val: 9}
//
//
//result := lowestCommonAncestor(tree, tree.Left, tree.Right)
//
//fmt.Printf("%+v", result)
