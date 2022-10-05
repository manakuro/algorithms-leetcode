class LRUCacheNode {
  value: number
  key: number
  prev: LRUCacheNode | null = null
  next: LRUCacheNode | null = null

  constructor(key: number, value: number) {
    this.value = value
    this.key = key
  }
}

/**
 * LRUCache - Double Link List
 *
 */
class LRUCache {
  capacity: number
  cache: Map<number, LRUCacheNode> = new Map()

  /**
   * Least recently used node (LRU)
   */
  head: LRUCacheNode = new LRUCacheNode(0, 0)

  /**
   * Most recent node
   */
  tail: LRUCacheNode = new LRUCacheNode(0, 0)

  constructor(capacity: number) {
    this.capacity = capacity

    this.head.next = this.tail
    this.tail.prev = this.head
  }

  /**
   * Remove node from list
   *
   * @param node
   * @private
   */
  // e.g.
  // 1. node1
  // head -> node1 -> tail
  // head -> tail
  //
  // 2. node2
  // head -> node1 -> node2 -> tail
  // head -> node1 -> tail
  private remove(node: LRUCacheNode): void {
    const prev = node.prev
    const next = node.next

    prev!.next = next
    next!.prev = prev
  }

  /**
   * Insert node at right
   *
   * @param node
   * @private
   */
  // e.g.
  // 1. node1
  // head -> node1 -> tail
  //
  // 2. node2
  // head -> node1 -> node2 -> tail
  private insert(node: LRUCacheNode): void {
    const prev = this.tail.prev!
    const tail = this.tail

    prev.next = node
    tail.prev = node
    node.next = tail
    node.prev = prev
  }

  get(key: number): number {
    if (!this.cache.get(key)) return -1

    // Update cache list
    this.remove(this.cache.get(key)!)
    this.insert(this.cache.get(key)!)

    return this.cache.get(key)!.value
  }

  put(key: number, value: number): void {
    if (this.cache.get(key)) this.remove(this.cache.get(key)!)

    this.cache.set(key, new LRUCacheNode(key, value))
    this.insert(this.cache.get(key)!)

    if (this.cache.size > this.capacity) {
      // remove from the list and delete the LRU from the cache
      const lru = this.head.next!
      this.remove(lru)
      this.cache.delete(lru.key)
    }
  }
}

// const cache = new LRUCache(2)
// cache.put(1, 1)
// cache.put(2, 2)
// console.log(cache.get(1))
// cache.put(3,3)
// console.log(cache.get(2))
// cache.put(4,4)
// console.log(cache.get(1))
// console.log(cache.get(3))
// console.log(cache.get(4))

const cache = new LRUCache(1)
cache.put(2, 1)
console.log(cache.get(2))
