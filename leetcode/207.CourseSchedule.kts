class Solution {
	fun canFinish(numCourses: Int, prerequisites: Array<IntArray>): Boolean {
		val maps = (0 until numCourses).associateWith { mutableListOf<Int>() }.toMutableMap()

		for (prerequisite in prerequisites) {
			val course = prerequisite[0]
			val pre = prerequisite[1]

			maps[course]?.add(pre)
		}

		val set = mutableSetOf<Int>()

		fun traverse(course: Int): Boolean {
			if (course in set) {
				return false
			}

			if (maps[course]?.isEmpty() == true) {
				return true
			}

			set.add(course)
			for (pre in maps[course] ?: emptyList()) {
				if (!traverse(pre)) {
					return false
				}
			}

			set.remove(course)
			maps[course] = mutableListOf()

			return true
		}

		for (i in 0 until numCourses) {
			if (!traverse(i)) {
				return false
			}
		}

		return true
	}
}
