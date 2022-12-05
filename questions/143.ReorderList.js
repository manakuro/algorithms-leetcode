function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function (head) {
  let slow = head
  let fast = head.next

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  let second = slow.next
  let prev = null
  slow.next = null
  while (second) {
    const next = second.next
    second.next = prev
    prev = second
    second = next
  }

  let first = head
  second = prev
  while (second) {
    let firstNext = first.next
    let secondNext = second.next
    first.next = second
    second.next = firstNext
    first = firstNext
    second = secondNext
  }
}

const node = new ListNode(1)
node.next = new ListNode(2)
node.next.next = new ListNode(3)
node.next.next.next = new ListNode(4)

reorderList(node)
