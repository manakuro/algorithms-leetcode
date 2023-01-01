package leetcode

func hasCycle(head *ListNode) bool {
	slow := head
	fast := head

	for fast != nil && fast.Next != nil {
		slow = slow.Next

		if fast.Next != nil && fast.Next.Next != nil {
			fast = fast.Next.Next
		} else {
			fast = nil
		}

		if slow == fast {
			return true
		}
	}

	return false
}
