package leetcode

func rightSideView(root *TreeNode) []int {
	var queue []*TreeNode
	var result []int

	queue = append(queue, root)

	for len(queue) > 0 {
		length := len(queue)
		var right *TreeNode

		for i := 0; i < length; i++ {
			node := queue[0]
			queue = queue[1:]

			if node != nil {
				right = node
				queue = append(queue, node.Left)
				queue = append(queue, node.Right)
			}
		}
		if right != nil {
			result = append(result, right.Val)
		}
	}

	return result
}
