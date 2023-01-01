class MinStack {
  stack: number[] = []
  minStack: number[] = []

  push(val: number): void {
    this.stack.push(val)

    const minStackValue = this.minStack.length
      ? Math.min(this.minStack[this.minStack.length - 1], val)
      : val
    this.minStack.push(minStackValue)
  }

  pop(): void {
    this.stack.pop()
    this.minStack.pop()
  }

  top(): number {
    return this.stack[this.stack.length - 1] ?? 0
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1]
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
const stack = new MinStack()
stack.push(-2)
stack.push(0)
stack.push(-3)
console.log(stack.getMin())
stack.pop()
console.log(stack.top())
console.log(stack.getMin())
