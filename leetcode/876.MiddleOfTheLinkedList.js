function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function (head) {
  let fast = head
  let slow = head

  while (fast?.next) {
    fast = fast.next?.next
    slow = slow.next
  }

  return slow
}

const node = new ListNode(1)
node.next = new ListNode(2)
node.next.next = new ListNode(3)
node.next.next.next = new ListNode(4)
node.next.next.next.next = new ListNode(5)

console.log(middleNode(node).val)
