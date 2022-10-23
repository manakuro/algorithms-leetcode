package questions

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

type ListNode struct {
	Val  int
	Next *ListNode
}

type GraphNode struct {
	Val       int
	Neighbors []*GraphNode
}
