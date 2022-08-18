// Recursion - fib
// Write a recursive function called fib which accepts a number and returns the `n`th number
// and returns the `n`th number in the Fibonacci sequence. Recall that the Fibonacci sequence is the
// sequence of whole numbers 1,1,2,3,5,8 ... which starts with 1 and 1, and where every number
// thereafter is equal to the sum of the previous two numbers.
function fibWithTabulation(n) {
  if (n <= 2) return 1

  const nums = [0, 1, 1]
  for (let i = 3; i <= n; i++) {
    nums[i] = nums[i - 1] + nums[i - 2]
  }
  return nums[n]
}
console.log(fibWithTabulation(10))
