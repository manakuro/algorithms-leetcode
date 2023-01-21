function climbStairs(n: number): number {
  let one = 1
  let two = 1
  let temp

  for (let i = 0; i < n - 1; i++) {
    temp = one
    one = one + two
    two = temp
  }

  return one
}
console.log(climbStairs(5)) // 8
