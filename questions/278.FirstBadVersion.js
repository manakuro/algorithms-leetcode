/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1
    let end = n
    let result = n

    while (end >= start) {
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
