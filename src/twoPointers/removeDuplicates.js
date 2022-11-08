/**
 * Given a sorted list of numbers, remove duplicates and return the new length. You must do this in-place and without using extra memory.
 *
 * Input: [0, 0, 1, 1, 1, 2, 2].
 *
 * Output: 3.
 *
 * Your function should modify the list in place so the first 3 elements becomes 0, 1, 2. Return 3 because the new length is 3.
 *
 * @param {number[]} arr
 * @return {number}
 */
function removeDuplicates(arr) {
  let slow = 0
  for (let fast = 0; fast < arr.length; fast++) {
    if (arr[fast] !== arr[slow]) {
      slow++
      arr[slow] = arr[fast]
    }
  }

  return slow + 1
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2]))
