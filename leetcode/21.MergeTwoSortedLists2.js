function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
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
  if (!list1 || !list2) return list1 || list2

  if (list1.val > list2.val) {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }

  list1.next = mergeTwoLists(list2, list1.next)
  return list1
}

const list1 = new ListNode(1)
list1.next = new ListNode(2)
list1.next.next = new ListNode(4)

const list2 = new ListNode(1)
list2.next = new ListNode(3)
list2.next.next = new ListNode(4)

console.log(mergeTwoLists(list1, list2))
