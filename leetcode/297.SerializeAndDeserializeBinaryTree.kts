class TreeNode(var `val`: Int) {
	var left: TreeNode? = null
	var right: TreeNode? = null
}

class Codec() {
	fun serialize(root: TreeNode?): String {
		val result = mutableListOf<String>()

		fun dfs(node: TreeNode?) {
			if (node == null) {
				result.add("null")
				return
			}

			result.add(node.`val`.toString())
			dfs(node.left)
			dfs(node.right)
		}

		dfs(root)

		return result.joinToString(",")
	}

	fun deserialize(data: String): TreeNode? {
		val values = data.split(",")
		var index = 0

		fun dfs(): TreeNode? {
			if (values[index] == "null") {
				index++
				return null
			}

			val value = values[index].toInt()
			val node = TreeNode(value)

			index++
			node.left = dfs()
			node.right = dfs()

			return node
		}

		return dfs()
	}
}
