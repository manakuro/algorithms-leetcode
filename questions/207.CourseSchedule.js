/**
 * canFinish - Graph and DFS
 *
 * Time complexity - O(n+p)
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// 1. Create a hash map
//  - Maps course to prerequisites
//    eg. prerequisites = [[0,1], [0,2],[1,3], [1,4],[3,4]]
//    { 0: [1,2], 1: [3,4], 2: [], 3: [4], 4: [] }
//
const canFinish = function (numCourses, prerequisites) {
  const map = [...new Array(numCourses)].reduce((acc, _, i) => {
    acc[i] = []
    return acc
  }, {})

  for (const prerequisite of prerequisites) {
    const [course, pre] = prerequisite
    map[course].push(pre)
  }

  const set = new Set()
  const traverse = (course) => {
    // If it's a loop, it's impossible to finish the courses.
    if (set.has(course)) return false
    if (map[course].length === 0) return true

    set.add(course)
    for (const pre of map[course]) {
      if (!traverse(pre)) return false
    }
    set.delete(course)
    map[course] = []
    return true
  }

  for (let i = 0; i < numCourses; i++) {
    if (!traverse(i)) return false
  }

  return true
}

console.log(canFinish(2, [[1, 0]]))
// console.log(canFinish(2, [[1,0], [0,1]]))
