package leetcode

func reverseList(head *ListNode) *ListNode {
	var prev *ListNode
	var next *ListNode
	current := head

	for current != nil {
		next = current.Next
		current.Next = prev
		prev = current
		current = next
	}

	return prev
}
