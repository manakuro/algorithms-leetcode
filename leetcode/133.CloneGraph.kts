class Node(var `val`: Int) {
	var neighbors: ArrayList<Node?> = ArrayList<Node?>()
}

class Solution {
	fun cloneGraph(node: Node?): Node? {
		if (node == null) {
			return null
		}

		var maps = HashMap<Node, Node>()

		fun traverse(node: Node): Node {
			if (maps.containsKey(node)) {
				return maps[node]!!
			}

			val clone = Node(node.`val`)
			maps[node] = clone

			for (neighbor in node.neighbors) {
				clone.neighbors.add(traverse(neighbor!!))
			}

			return clone
		}

		return traverse(node)
	}
}
