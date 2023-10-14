class Solution {
	fun trap(height: IntArray): Int {
		if (height.isEmpty()) {
			return 0
		}

		var left = 0
		var right = height.size - 1
		var leftMax = height[left]
		var rightMax = height[right]
		var result = 0

		while (left < right) {
			if (leftMax < rightMax) {
				left++
				leftMax = maxOf(leftMax, height[left])
				result += leftMax - height[left]
			} else {
				right--
				rightMax = maxOf(rightMax, height[right])
				result += rightMax - height[right]
			}
		}

		return result
	}
}
