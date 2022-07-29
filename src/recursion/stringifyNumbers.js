// Recursion - stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and
// finds all the values which are numbers and converts them to strings.
// Recursion would be a great way to solve this.

function stringifyNumbers(obj) {
  const result = {}
  for (const key in obj) {
    const value = obj[key]
    if (typeof value === 'object' && !Array.isArray(value)) {
      result[key] = stringifyNumbers(value)
      continue
    }
    if (typeof value === 'number') {
      result[key] = String(value)
      continue
    }
    result[key] = value
  }

  return result
}

console.log(
  stringifyNumbers({
    num: 1,
    test: [],
    data: {
      val: 4,
      info: {
        isRight: true,
        random: 66,
      },
    },
  }),
)
