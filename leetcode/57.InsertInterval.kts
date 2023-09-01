class Solution {
	fun insert(intervals: Array<IntArray>, newInterval: IntArray): Array<IntArray> {
		var result = mutableListOf<IntArray>()

		for ((i, interval) in intervals.withIndex()) {
			if (newInterval[1] < interval[0]) {
				result.add(newInterval)
				return result.plus(intervals.copyOfRange(i, intervals.size)).toTypedArray()
			}

			if (newInterval[0] > interval[1]) {
				result.add(interval)
				continue
			}

			newInterval[0] = minOf(newInterval[0], interval[0])
			newInterval[1] = maxOf(newInterval[1], interval[1])
		}

		result.add(newInterval)

		return result.toTypedArray()
	}
}
