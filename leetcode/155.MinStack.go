package leetcode

import "math"

type MinStack struct {
	Stack    []int
	MinStack []int
}

func (m *MinStack) Push(val int) {
	m.Stack = append(m.Stack, val)

	minStackValue := val
	if len(m.MinStack) > 0 {
		minStackValue = int(math.Min(float64(m.MinStack[len(m.MinStack)-1]), float64(val)))
	}

	m.MinStack = append(m.MinStack, minStackValue)
}

func (m *MinStack) Pop() {
	m.Stack = m.Stack[:len(m.Stack)-1]
	m.MinStack = m.MinStack[:len(m.MinStack)-1]
}

func (m *MinStack) Top() int {
	if len(m.Stack) == 0 {
		return 0
	}

	return m.Stack[len(m.MinStack)-1]
}

func (m *MinStack) GetMin() int {
	if len(m.MinStack) == 0 {
		return 0
	}

	return m.MinStack[len(m.MinStack)-1]
}
