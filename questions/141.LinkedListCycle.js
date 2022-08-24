function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * hasCycle with Slow and Fast - Space complexity O(1)
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next?.next

    if (slow === fast) return true
  }

  return false
}
const head = new ListNode(3)
head.next = new ListNode(2)
head.next.next = new ListNode(0)
head.next.next.next = new ListNode(-4)
head.next.next.next.next = head.next

console.log(hasCycle(head))

/**
 * hasCycle with HashSet solution - Space complexity O(n)
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycleWithHash = function (head) {
  let current = head
  const visited = new Set()

  while (current) {
    visited.add(current)
    if (visited.has(current.next)) return true
    current = current.next
  }
  return false
}
const head2 = new ListNode(3)
head2.next = new ListNode(2)
head2.next.next = new ListNode(0)
head2.next.next.next = new ListNode(-4)
head2.next.next.next.next = head2.next
console.log(hasCycleWithHash(head2))
