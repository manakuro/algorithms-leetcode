class ListNode(var `val`: Int) {
	var next: ListNode? = null
}


class Solution {
	fun reverseList(head: ListNode?): ListNode? {
		var next: ListNode? = null
		var prev: ListNode? = null
		var current = head

		while (current != null) {
			next = current.next
			current.next = prev
			prev = current
			current = next
		}

		return prev
	}
}
