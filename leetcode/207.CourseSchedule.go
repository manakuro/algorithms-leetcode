package leetcode

func canFinish(numCourses int, prerequisites [][]int) bool {
	mappings := make(map[int][]int)

	for i := 0; i < numCourses; i++ {
		mappings[i] = []int{}
	}

	for _, prerequisite := range prerequisites {
		course, pre := prerequisite[0], prerequisite[1]
		mappings[course] = append(mappings[course], pre)
	}

	set := make(map[int]struct{})
	var traverse func(course int) bool

	traverse = func(course int) bool {
		_, ok := set[course]
		if ok {
			return false
		}

		if len(mappings[course]) == 0 {
			return true
		}

		set[course] = struct{}{}
		for _, pre := range mappings[course] {
			if !traverse(pre) {
				return false
			}
		}

		delete(set, course)
		mappings[course] = []int{}

		return true
	}

	for i := 0; i < numCourses; i++ {
		if !traverse(i) {
			return false
		}
	}

	return true
}
