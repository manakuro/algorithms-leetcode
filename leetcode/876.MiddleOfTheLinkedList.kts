class ListNode(var `val`: Int) {
	var next: ListNode? = null
}

class Solution {
	fun middleNode(head: ListNode?): ListNode? {
		var slow = head
		var fast = head

		while (fast?.next != null) {
			fast = fast?.next?.next
			slow = slow?.next
		}

		return slow
	}
}
