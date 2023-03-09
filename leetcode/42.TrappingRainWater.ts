function trap(height: number[]): number {
  if (!height.length) return 0

  let left = 0
  let right = height.length - 1
  let leftMax = height[left]
  let rightMax = height[right]
  let result = 0

  while (left < right) {
    if (leftMax < rightMax) {
      left++
      leftMax = Math.max(leftMax, height[left])
      result += leftMax - height[left]
    } else {
      right--
      rightMax = Math.max(rightMax, height[right])
      result += rightMax - height[right]
    }
  }

  return result
}
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
