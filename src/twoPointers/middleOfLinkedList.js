class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

/**
 * Find the middle node of a linked list.
 *
 * Input: 0 1 2 3 4
 *
 * Output: 2
 *
 * If the number of nodes is even, then return the second middle node.
 *
 * Input: 0 1 2 3 4 5
 *
 * Output: 3
 * @param {Node} head
 * @return {number}
 */
function middleOfLinkedList(head) {
  let slow = head
  let fast = head

  while (fast?.next) {
    fast = fast.next?.next
    slow = slow?.next
  }

  return slow.val
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log(middleOfLinkedList(head))
