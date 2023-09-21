class Solution {
	fun merge(intervals: Array<IntArray>): Array<IntArray> {
		intervals.sortBy { it[0] }

		val result = mutableListOf<IntArray>()
		result.add(intervals[0])

		for (i in 1 until intervals.size) {
			val current = intervals[i]
			val last = result.last()

			if (current[0] <= last[1]) {
				last[1] = maxOf(last[1], current[1])
			} else {
				result.add(current)
			}
		}

		return result.toTypedArray()
	}
}
