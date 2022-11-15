/**
 *
 * @param {number[]} elevations
 * @return {number}
 */
function trappingRainWater(elevations) {
  if (!elevations.length) return 0

  let left = 0
  let right = elevations.length - 1
  let leftMax = elevations[left]
  let rightMax = elevations[right]
  let result = 0

  while (left < right) {
    if (leftMax < rightMax) {
      left++
      leftMax = Math.max(leftMax, elevations[left])
      result += leftMax - elevations[left]
    } else {
      right--
      rightMax = Math.max(rightMax, elevations[right])
      result += rightMax - elevations[right]
    }
  }

  return result
}

console.log(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
