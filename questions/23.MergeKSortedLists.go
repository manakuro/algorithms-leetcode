package questions

func mergeKLists(lists []*ListNode) *ListNode {
	if len(lists) == 0 {
		return nil
	}

	var merge func(list1, list2 *ListNode) *ListNode

	merge = func(list1, list2 *ListNode) *ListNode {
		head := &ListNode{}
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
		if list1 != nil {
			current.Next = list1
		}
		if list2 != nil {
			current.Next = list2
		}
		return head.Next
	}

	for len(lists) > 1 {
		var merged []*ListNode

		for i := 0; i < len(lists); i += 2 {
			list1 := lists[i]
			var list2 *ListNode
			if i+1 < len(lists) {
				list2 = lists[i+1]
			}

			merged = append(merged, merge(list1, list2))
		}
		lists = merged
	}

	return lists[0]
}
