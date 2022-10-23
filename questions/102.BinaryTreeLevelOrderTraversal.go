package questions

func levelOrder(root *TreeNode) [][]int {
	var result [][]int
	var stack []*TreeNode

	stack = append(stack, root)
	for len(stack) > 0 {
		length := len(stack)

		var nodeStack []int
		for i := 0; i < length; i++ {
			node := stack[0]
			stack = stack[1:]

			if node != nil {
				nodeStack = append(nodeStack, node.Val)
				stack = append(stack, node.Left)
				stack = append(stack, node.Right)
			}
		}
		if len(nodeStack) > 0 {
			result = append(result, nodeStack)
		}
	}

	return result
}
