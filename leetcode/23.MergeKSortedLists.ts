import { ListNode } from './shared'

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists.length) return null

  const merge = (list1: ListNode | null, list2: ListNode | null) => {
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
    if (list1) {
      current.next = list1
    }
    if (list2) {
      current.next = list2
    }

    return head.next
  }

  while (lists.length > 1) {
    const merged = []
    for (let i = 0; i < lists.length; i += 2) {
      const list1 = lists[i]
      const list2 = lists?.[i + 1] ?? null
      merged.push(merge(list1, list2))
    }
    lists = merged
  }

  return lists[0]
}

const list1 = new ListNode(1, new ListNode(4, new ListNode(5, null)))
const list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)))
const list3 = new ListNode(2, new ListNode(6, null))

console.log(mergeKLists([list1, list2, list3]))
