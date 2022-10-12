/**
 * Given a list of n items and their weights, find all sums that can be formed using their weights.
 *
 * Input
 * weights: A list of items and their weights.
 * Output
 * A list of possible sums using the weights.
 *
 * Example 1:
 * Input:
 *
 * weights = [1, 3, 3, 5]
 * Output: [0, 1, 3, 4, 5, 6, 7, 8, 9, 11, 12]
 *
 * Explanation:
 *
 * We can form all sums from 0 to 12 except 2 and 10. Here is a short explanation for the sums:
 *
 * 0: use none of the weights
 * 1: use item with weight 1
 * 3: use item with weight 3
 * 4: use weights 1 + 3 = 4
 * 5: use item with weight 5
 * 6: use weights 3 + 3 = 6
 * 7: use weights 1 + 3 + 3 = 7
 * 8: use weights 3 + 5 = 8
 * 9: use weights 1 + 3 + 5 = 9
 * 11: use weights 3 + 3 + 5 = 11
 * 12: use all weights
 *
 * @param {number[]} weights
 * @return {number[]}
 */
function knapsackWeightOnlyTopDown(weights) {
  const sums = new Set()
  const i = weights.length
  const totalSum = weights.reduce((acc, v) => acc + v, 0)
  const memo = new Array(weights.length + 1)
  for (let j = 0; j < weights.length + 1; j++) {
    memo[j] = new Array(totalSum + 1)
    for (let k = 0; k < totalSum + 1; k++) {
      memo[j][k] = false
    }
  }

  generateSums(weights, sums, 0, i, memo)
  return Array.from(sums)
}

/**
 *
 * @param {number[]} weights
 * @param {Set} sums
 * @param {number} sum
 * @param {number} i
 * @param {number[]} memo
 */
function generateSums(weights, sums, sum, i, memo) {
  if (memo[i][sum]) {
    return
  }
  if (i === 0) {
    sums.add(sum)
    return
  }
  generateSums(weights, sums, sum, i - 1, memo)
  generateSums(weights, sums, sum + weights[i - 1], i - 1, memo)
  memo[i][sum] = true
}

console.log(knapsackWeightOnlyTopDown([1, 3, 3, 5]))
