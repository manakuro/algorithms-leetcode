class ListNode(var `val`: Int) {
	var next: ListNode? = null
}

class Solution {
	fun mergeTwoLists(list1: ListNode?, list2: ListNode?): ListNode? {
		val head = ListNode(0)
		var current = head
		var l1 = list1
		var l2 = list2

		while (l1 != null && l2 != null) {
			if (l1.`val` < l2.`val`) {
				current.next = l1
				l1 = l1.next
			} else {
				current.next = l2
				l2 = l2.next
			}

			current = current.next!!
		}

		while (l1 != null) {
			current.next = l1
			current = current.next!!
			l1 = l1.next
		}

		while (l2 != null) {
			current.next = l2
			current = current.next!!
			l2 = l2.next
		}

		return head.next
	}
}
