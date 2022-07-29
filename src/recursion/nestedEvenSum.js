// Recursion - nestedEvenSum
// Write a function called nestedEvenSum. Return the sum of all even numbers
// in an object which may contain nested objects.

function nestedEvenSum(obj) {
  let result = 0
  for (const key in obj) {
    const value = obj[key]

    if (typeof value === 'object') {
      result += nestedEvenSum(value)
    }
    if (typeof value === 'number' && value % 2 === 0) {
      result += value
    }
  }
  return result
}
console.log(
  nestedEvenSum({
    outer: 2,
    obj: {
      inner: 2,
      outerObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: 'hey',
      },
    },
  }),
)

console.log(
  nestedEvenSum({
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'char' },
  }),
)
