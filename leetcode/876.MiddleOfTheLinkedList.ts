import { ListNode } from './shared'

function middleNode(head: ListNode | null): ListNode | null {
  let fast = head
  let slow = head

  while (fast?.next) {
    fast = fast.next?.next
    slow = slow?.next ?? null
  }

  return slow
}

const node = new ListNode(1)
node.next = new ListNode(2)
node.next.next = new ListNode(3)
node.next.next.next = new ListNode(4)
node.next.next.next.next = new ListNode(5)

console.log(middleNode(node)?.val)
