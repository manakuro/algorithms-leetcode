import java.lang.IllegalArgumentException
import java.util.Stack

class Solution {
	fun evalRPN(tokens: Array<String>): Int {
		val stack = Stack<String>()

		val calc: (Int, Int, String) -> Int = { num1, num2, operator ->
			when(operator) {
				"+" -> num1 + num2
				"-" -> num1 - num2
				"*" -> num1 * num2
				"/" -> num1 / num2
				else -> throw IllegalArgumentException("Invalid value")
			}
		}

		for (token in tokens) {
			if (token in setOf("+", "-", "*", "/")) {
				val num2 = stack.pop().toInt()
				val num1 = stack.pop().toInt()

				stack.add(calc(num1, num2, token).toString())
				continue
			}

			stack.add(token)
		}

		return stack.pop().toInt()
	}
}
