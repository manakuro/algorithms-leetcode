import { ListNode } from './shared'

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null
  let next = null
  let current = head

  while (current) {
    next = current.next
    current.next = prev
    prev = current
    current = next
  }

  return prev
}
const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(3)
head.next.next.next.next = new ListNode(4)
head.next.next.next.next.next = new ListNode(5)

console.log(reverseList(head))
