package questions

type ListNode21 struct {
	Val  int
	Next *ListNode21
}

func mergeTwoLists(list1 *ListNode21, list2 *ListNode21) *ListNode21 {
	head := &ListNode21{}
	current := head

	for list1 != nil && list2 != nil {
		if list1.Val < list2.Val {
			current.Next = list1
			list1 = list1.Next
		} else {
			current.Next = list2
			list2 = list2.Next
		}
		current = current.Next
	}

	for list1 != nil {
		current.Next = list1
		list1 = list1.Next
		current = current.Next
	}

	for list2 != nil {
		current.Next = list2
		list2 = list2.Next
		current = current.Next
	}

	return head.Next
}
