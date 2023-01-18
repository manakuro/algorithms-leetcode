import { ListNode } from './shared'

function hasCycle(head: ListNode | null): boolean {
  let slow = head
  let fast = head

  while (fast?.next) {
    slow = slow?.next ?? null
    fast = fast.next?.next ?? null

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
