class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const head = new ListNode()
  let current = head

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      list2 = list2.next
    }
    current = current.next
  }

  while (list1) {
    current.next = list1
    list1 = list1.next
    current = current.next
  }

  while (list2) {
    current.next = list2
    list2 = list2.next
    current = current.next
  }

  return head.next
}

const list1 = new ListNode(1)
list1.next = new ListNode(2)
list1.next.next = new ListNode(4)

const list2 = new ListNode(1)
list2.next = new ListNode(3)
list2.next.next = new ListNode(4)

const merged = mergeTwoLists(list1, list2)
console.log(merged)
