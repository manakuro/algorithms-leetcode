package leetcode

type MyQueue struct {
	Values []int
}

func Constructor() MyQueue {
	return MyQueue{}
}

func (this *MyQueue) Push(x int) {
	this.Values = append(this.Values, x)
}

func (this *MyQueue) Pop() int {
	v := this.Values[0]
	this.Values = this.Values[1:]
	return v
}

func (this *MyQueue) Peek() int {
	return this.Values[0]
}

func (this *MyQueue) Empty() bool {
	return len(this.Values) == 0
}
