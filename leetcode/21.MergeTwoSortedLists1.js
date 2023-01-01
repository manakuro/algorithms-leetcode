function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next

  this.print = () => {
    const arr = []
    arr.push(this.val)

    let current = this.next
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    return arr
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
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
console.log(merged.print())
