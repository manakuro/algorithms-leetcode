/**
 *
 * @param {boolean[]} arr
 * @return number
 */
function findBoundary(arr) {
  let start = 0
  let end = arr.length - 1
  let current = -1

  while (start <= end) {
    const middle = Math.floor((start + end) / 2)
    const value = arr[middle]

    if (value === true) {
      end = middle - 1
      current = middle
    } else {
      start = middle + 1
    }
  }

  return current
}
console.log(findBoundary([false, false, true, true, true]))
