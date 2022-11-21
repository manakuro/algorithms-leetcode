package questions

type LRUCacheNode struct {
	Value int
	Key   int
	Prev  *LRUCacheNode
	Next  *LRUCacheNode
}

type LRUCache struct {
	Capacity int
	Cache    map[int]*LRUCacheNode

	/**
	 * Least recently used node (LRU)
	 */
	Head *LRUCacheNode

	/**
	 * Most recent node
	 */
	Tail *LRUCacheNode
}

//func Constructor(capacity int) LRUCache {
//	head := &LRUCacheNode{Value: 0, Key: 0}
//	tail := &LRUCacheNode{Value: 0, Key: 0}
//
//	head.Next = tail
//	tail.Prev = head
//
//	return LRUCache{
//		Capacity: capacity,
//		Cache:    map[int]*LRUCacheNode{},
//		Head:     head,
//		Tail:     tail,
//	}
//}

// e.g.
// 1. node1
// head -> node1 -> tail
//
// 2. node2
// head -> node1 -> node2 -> tail
func (lc *LRUCache) insert(node *LRUCacheNode) {
	prev := lc.Tail.Prev
	next := lc.Tail

	prev.Next = node
	next.Prev = node

	node.Next = next
	node.Prev = prev
}

// e.g.
// 1. node1
// head -> node1 -> tail
// head -> tail
//
// 2. node2
// head -> node1 -> node2 -> tail
// head -> node1 -> tail
func (lc *LRUCache) remove(node *LRUCacheNode) {
	prev := node.Prev
	next := node.Next

	if prev != nil {
		prev.Next = next
	}
	if next != nil {
		next.Prev = prev
	}
}

func (lc *LRUCache) Get(key int) int {
	node, ok := lc.Cache[key]
	if !ok {
		return -1
	}

	lc.remove(node)
	lc.insert(node)

	return lc.Cache[key].Value
}

func (lc *LRUCache) Put(key int, value int) {
	node, ok := lc.Cache[key]
	if ok {
		lc.remove(node)
	}

	lc.Cache[key] = &LRUCacheNode{Key: key, Value: value}
	lc.insert(lc.Cache[key])

	if len(lc.Cache) > lc.Capacity {
		lru := lc.Head.Next
		lc.remove(lru)
		delete(lc.Cache, lru.Key)
	}

}
