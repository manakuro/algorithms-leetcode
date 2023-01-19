/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */
const solution = function (isBadVersion: (n: number) => boolean) {
  return function (n: number): number {
    let start = 0
    let end = n
    let result = n

    while (start <= end) {
      const middle = Math.floor((start + end) / 2)
      if (isBadVersion(middle)) {
        result = middle
        end = middle - 1
      } else {
        start = middle + 1
      }
    }
    return result
  }
}
console.log(solution((n) => n === 4)(5))
