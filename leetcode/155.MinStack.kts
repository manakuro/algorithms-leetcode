class MinStack() {
  private var stack: MutableList<Int> = mutableListOf()
  private var minStack: MutableList<Int> = mutableListOf()

  fun push(`val`: Int) {
    stack.add(`val`)

    val minStackValue = if (minStack.isNotEmpty()) {
      minStack[minStack.size-1].coerceAtMost(`val`)
    } else {
      `val`
    }

    minStack.add(minStackValue)
  }

  fun pop() {
    stack.removeAt(stack.size-1)
    minStack.removeAt(minStack.size-1)
  }

  fun top(): Int {
    return stack.lastOrNull() ?: 0
  }

  fun getMin(): Int {
    return minStack.last()
  }
}
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = MinStack()
 * obj.push(`val`)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
