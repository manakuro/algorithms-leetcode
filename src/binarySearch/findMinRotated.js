/**
 *
 * @param {number[]} arr
 * @return {number}
 */
function findMinRotated(arr) {
  let start = 0
  let end = arr.length - 1
  const last = arr[arr.length - 1]
  let result = -1

  while (start <= end) {
    const middle = Math.floor((start + end) / 2)
    const value = arr[middle]

    if (value <= last) {
      end = middle - 1
      result = middle
    } else {
      start = middle + 1
    }
  }

  return result
}
console.log(findMinRotated([30, 40, 50, 10, 20]))
