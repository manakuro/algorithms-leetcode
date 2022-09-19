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
  left: LRUCacheNode = new LRUCacheNode(0, 0)

  /**
   * Most recent node
   */
  right: LRUCacheNode = new LRUCacheNode(0, 0)

  constructor(capacity: number) {
    this.capacity = capacity

    this.left.next = this.right
    this.right.prev = this.left
  }

  /**
   * Remove node from list
   *
   * @param node
   * @private
   */
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
  private insert(node: LRUCacheNode): void {
    const prev = this.right.prev!
    const next = this.right

    prev.next = node
    next.prev = node
    node.next = next
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
      const lru = this.left.next!
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
