// Recursion - collectStrings
// Write a function called collectStrings which accepts an object and
// returns an array of all the values in the object that have a typeof string.

function collectStrings(obj) {
  let result = []
  for (const key in obj) {
    const value = obj[key]
    if (typeof value === 'object' && !Array.isArray(value)) {
      result = result.concat(collectStrings(value))
      continue
    }
    if (typeof value === 'string') {
      result = result.concat(value)
      console.log(result)
    }
  }

  return result
}
console.log(
  collectStrings({
    stuff: 'foo',
    hey: 'yo',
    data: {
      val: {
        thing: {
          info: 'bar',
          moreInfo: {
            evenMoreInfo: {
              weMadeIt: 'baz',
            },
          },
        },
      },
    },
  }),
)
