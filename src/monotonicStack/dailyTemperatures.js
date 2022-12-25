/**
 * Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.
 *
 * @example:
 * Input: [73, 74, 75, 71, 69, 72, 76, 73]
 *
 * Output: [1, 1, 4, 2, 1, 1, 0, 0]
 *
 * @param {number[]} t
 * @return {number[]}
 */
function dailyTemperatures(t) {
  const result = [...new Array(t.length)].fill(0)
  const stack = []
  for (let i = 0; i < t.length; i++) {
    while (stack.length && t[stack[stack.length - 1]] < t[i]) {
      const prevIndex = stack.pop()
      result[prevIndex] = i - prevIndex
    }
    stack.push(i)
  }

  return result
}
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
