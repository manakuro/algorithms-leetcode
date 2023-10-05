class Solution {
	fun maxArea(height: IntArray): Int {
		var max = 0
		var left = 0
		var right = height.size - 1

		while (left < right) {
			val area = (right - left) * minOf(height[left], height[right])
			max = maxOf(max, area)

			if (height[left] < height[right]) {
				left++
				continue
			}

			right--
		}

		return max
	}
}
