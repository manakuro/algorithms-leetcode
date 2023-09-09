class TrieNode {
	val children = mutableMapOf<Char, TrieNode>()
	var isEndOfWord = false
}

class Trie() {
	private val root = TrieNode()

	fun insert(word: String) {
		var current = root

		for (char in word) {
			if (!current.children.containsKey(char)) {
				current.children[char] = TrieNode()
			}
			current = current.children[char]!!
		}

		current.isEndOfWord = true
	}

	fun search(word: String): Boolean {
		var current = root

		for (char in word) {
			if (!current.children.containsKey(char)) {
				return false
			}
			current = current.children[char]!!
		}

		return current.isEndOfWord
	}

	fun startsWith(prefix: String): Boolean {
		var current = root

		for (char in prefix) {
			if (!current.children.containsKey(char)) {
				return false
			}
			current = current.children[char]!!
		}
		return true
	}
}
