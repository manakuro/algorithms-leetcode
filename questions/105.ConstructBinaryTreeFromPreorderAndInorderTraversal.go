package questions

func buildTree(preorder []int, inorder []int) *TreeNode {
	if len(preorder) == 0 {
		return nil
	}
	if len(inorder) == 0 {
		return nil
	}

	root := &TreeNode{Val: preorder[0]}
	middleIndex := 0
	for i, val := range inorder {
		if val == preorder[0] {
			middleIndex = i
		}
	}

	root.Left = buildTree(preorder[1:middleIndex+1], inorder[0:middleIndex])
	root.Right = buildTree(preorder[middleIndex+1:], inorder[middleIndex+1:])

	return root
}
