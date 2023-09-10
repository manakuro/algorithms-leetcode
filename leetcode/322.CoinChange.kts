class Solution {
	fun coinChange(coins: IntArray, amount: Int): Int {
		val memo = mutableMapOf<Int,Int>()
		val max = Int.MAX_VALUE

		fun dfs(sum: Int): Int {
			if (sum == amount) {
				return 0
			}
			if (sum > amount) {
				return max
			}
			if (memo.containsKey(sum)) {
				return memo[sum]!!
			}

			var result = max
			for (coin in coins) {
				val total = dfs(sum + coin)
				if (total == max) {
					continue
				}

				result = minOf(result, total + 1)
			}

			memo[sum] = result

			return result
		}

		val res = dfs(0)
		if (res == max) {
			return -1
		}

		return res
	}
}
