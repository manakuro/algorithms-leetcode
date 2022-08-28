function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const print = (head) => {
  const arr = []
  let current = head
  while (current) {
    arr.push(current.val)
    current = current.next
  }
  return arr
}

/**
 * reverseList iteratively - O(n)
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
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

console.log(print(reverseList(head)))

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseListRecursively = function (head) {
  if (!head) return null

  let newHead = head
  if (head.next) {
    newHead = reverseListRecursively(head.next)
    head.next.next = head
  }
  head.next = null

  return newHead
}

const head2 = new ListNode(1)
head2.next = new ListNode(2)
head2.next.next = new ListNode(3)
head2.next.next.next = new ListNode(3)
head2.next.next.next.next = new ListNode(4)
head2.next.next.next.next.next = new ListNode(5)

console.log(print(reverseListRecursively(head2)))
