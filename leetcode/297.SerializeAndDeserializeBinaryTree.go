package leetcode

import (
	"strconv"
	"strings"
)

type Codec struct {
}

// Serializes a tree to a single string.
func (c *Codec) serialize(root *TreeNode) string {
	var traverse func(node *TreeNode)

	var result []string

	traverse = func(node *TreeNode) {
		if node == nil {
			result = append(result, "nil")
			return
		}

		result = append(result, strconv.Itoa(node.Val))
		traverse(node.Left)
		traverse(node.Right)
	}

	traverse(root)

	return strings.Join(result, ",")
}

// Deserializes your encoded data to tree.
func (c *Codec) deserialize(data string) *TreeNode {
	var traverse func() *TreeNode
	values := strings.Split(data, ",")

	i := 0
	traverse = func() *TreeNode {
		if string(values[i]) == "nil" {
			i++
			return nil
		}

		val, _ := strconv.Atoi(values[i])
		node := &TreeNode{Val: val}
		i++
		node.Left = traverse()
		node.Right = traverse()

		return node
	}

	return traverse()
}
