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
function knapsackWeightOnlyBruteForce(weights) {
  const sums = new Set()
  const length = weights.length
  generateSums(weights, sums, 0, length)
  return Array.from(sums)
}

function generateSums(weights, sums, sum, n) {
  if (n === 0) {
    sums.add(sum)
    return
  }
  generateSums(weights, sums, sum, n - 1)
  generateSums(weights, sums, sum + weights[n - 1], n - 1)
}

console.log(knapsackWeightOnlyBruteForce([1, 3, 3, 5]))
