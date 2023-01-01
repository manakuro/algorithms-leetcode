package leetcode

func cloneGraph(node *GraphNode) *GraphNode {
	if node == nil {
		return nil
	}

	var traverse func(node *GraphNode) *GraphNode

	mappings := make(map[*GraphNode]*GraphNode)

	traverse = func(node *GraphNode) *GraphNode {
		_, ok := mappings[node]
		if ok {
			return mappings[node]
		}

		c := &GraphNode{Val: node.Val}
		mappings[node] = c

		for _, neighbor := range node.Neighbors {
			c.Neighbors = append(c.Neighbors, traverse(neighbor))
		}

		return c
	}

	return traverse(node)
}
