class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

/**
 *
 * @param {ListNode} node
 * @return {boolean}
 */
function hasCycle(node) {
  let slow = node
  let fast = node

  while (fast?.next) {
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
