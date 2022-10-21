/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let result = 0
  let left = 0
  let right = height.length - 1

  while (left < right) {
    const w = right - left
    const h = Math.min(height[left], height[right])

    const area = w * h
    result = Math.max(result, area)

    if (height[left] < height[right]) {
      left++
      continue
    }
    right--
  }

  return result
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
