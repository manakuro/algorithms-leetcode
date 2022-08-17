// Recursion - fib
// Write a recursive function called fib which accepts a number and returns the `n`th number
// and returns the `n`th number in the Fibonacci sequence. Recall that the Fibonacci sequence is the
// sequence of whole numbers 1,1,2,3,5,8 ... which starts with 1 and 1, and where every number
// thereafter is equal to the sum of the previous two numbers.
const memo = {}
function fibWithMemoization(n) {
  if (n <= 2) return 1

  if (!memo[n]) memo[n] = fibWithMemoization(n - 1) + fibWithMemoization(n - 2)

  return memo[n]
}
console.log(fibWithMemoization(4))
