/**
 * climbStairs - Dynamic Programming(cache)
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  let one = 1
  let two = 1
  let temp

  // e.g. n = 5
  //  0 1 2 3 4 5
  // |8|5|3|2|1|1|
  //
  // 1 + 0 = 1 path // 5
  // 1 + 0 = 1 path // 4
  // 1 + 1 = 2 path // 3
  // 2 + 1 = 3 path // 2
  // 3 + 2 = 5 path // 1
  // 5 + 3 = 8 path // 0
  for (let i = 0; i < n - 1; i++) {
    temp = one
    one = one + two
    two = temp
  }
  return one
}

console.log(climbStairs(5)) // 8
