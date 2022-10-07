/**
 *
 * @param {number[]} weights
 * @param {number} d
 * @return {number}
 */
function minMaxWeight(weights, d) {
  let min = Math.max(...weights)
  let max = weights.reduce((acc, v) => acc + v, 0)
  let result = max

  while (min <= max) {
    const middle = Math.floor((min + max) / 2)
    if (feasible(weights, middle, d)) {
      result = middle
      max = middle - 1
    } else {
      min = middle + 1
    }
  }

  return result
}

/**
 *
 * @param {number[]} weights
 * @param {number} maxWeight
 * @param {number} d
 * @return {boolean}
 */
const feasible = (weights, maxWeight, d) => {
  let days = 1
  let capacity = maxWeight
  let i = 0
  const n = weights.length
  while (i < n) {
    if (weights[i] <= capacity) {
      capacity -= weights[i]
      i++
    } else {
      days++
      capacity = maxWeight
    }
  }

  return days <= d
}

console.log(minMaxWeight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))
