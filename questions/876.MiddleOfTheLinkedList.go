package questions

func middleNode(head *ListNode) *ListNode {
	fast := head
	slow := head

	for fast != nil && fast.Next != nil {
		if fast.Next != nil && fast.Next.Next != nil {
			fast = fast.Next.Next
		} else {
			fast = nil
		}
		if slow != nil && slow.Next != nil {
			slow = slow.Next
		}
	}
	return slow
}
