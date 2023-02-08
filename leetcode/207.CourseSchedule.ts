function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const map = [...new Array(numCourses)].reduce((acc, _, i) => {
    acc[i] = []
    return acc
  }, {} as Record<number, number[]>)

  for (const prerequisite of prerequisites) {
    const [course, pre] = prerequisite
    map[course].push(pre)
  }

  const set = new Set<number>()
  const traverse = (course: number) => {
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
