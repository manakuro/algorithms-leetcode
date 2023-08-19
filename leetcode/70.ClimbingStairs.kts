class Solution {
	fun climbStairs(n: Int): Int {
		var one = 1
		var two = 1
		var temp = 0

		for (i in 0 until n - 1) {
			temp = one
			one = one + two
			two = temp
		}

		return one
	}
}
