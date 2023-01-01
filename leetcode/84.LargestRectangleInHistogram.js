/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = function (heights) {
  let max = 0
  const stack = []

  for (let i = 0; i < heights.length; i++) {
    const height = heights[i]
    let start = i

    while (stack.length && stack[stack.length - 1][1] > height) {
      const [index, h] = stack.pop()

      max = Math.max(max, h * (i - index))
      start = index
    }
    stack.push([start, height])
  }

  for (const [index, height] of stack) {
    max = Math.max(max, height * (heights.length - index))
  }

  return max
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
// console.log(largestRectangleArea([2,4]))
