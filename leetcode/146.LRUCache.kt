data class LRUCacheNode(
		var value: Int,
		var key: Int,
		var prev: LRUCacheNode? = null,
		var next: LRUCacheNode? = null
)

class LRUCache(capacity: Int) {
	private var capacity: Int = capacity
	private var cache = mutableMapOf<Int, LRUCacheNode>()
	private var head: LRUCacheNode = LRUCacheNode(0, 0)
	private var tail: LRUCacheNode = LRUCacheNode(0, 0)

	init {
		head.next = tail
		tail.prev = head
	}

	private fun insert(node: LRUCacheNode) {
		val prev = tail.prev
		val next = tail

		prev?.next = node
		next.prev = node

		node.next = next
		node.prev = prev
	}
	private fun remove(node: LRUCacheNode) {
		val prev = node.prev
		val next = node.next

		prev?.next = next
		next?.prev = prev
	}
	fun get(key: Int): Int {
		val node = cache[key] ?: return -1
		remove(node)
		insert(node)

		return cache[key]!!.value
	}
	fun put(key: Int, value: Int) {
		val node = cache[key]

		if (node != null) {
			remove(node)
		}

		cache[key] = LRUCacheNode(key, value)
		insert(cache[key]!!)

		if (cache.size > capacity) {
			val lru = head.next!!
			remove(lru)
			cache.remove(lru.key)
		}
	}
}
