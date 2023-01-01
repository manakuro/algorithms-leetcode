package leetcode

import "math"

type MyCalendar struct {
	Calendar [][2]int
}

//func Constructor() MyCalendar {
//	return MyCalendar{
//		Calendar: [][2]int{},
//	}
//}

func (c *MyCalendar) Book(start int, end int) bool {
	left := 0
	right := len(c.Calendar) - 1
	index := len(c.Calendar)

	for left <= right {
		middle := int(math.Floor(float64((left + right) / 2)))

		if c.Calendar[middle][0] > start {
			index = middle
			right = middle - 1
		} else {
			left = middle + 1
		}
	}

	if index > 0 && c.Calendar[index-1][1] > start {
		return false
	}
	if index < len(c.Calendar) && c.Calendar[index][0] < end {
		return false
	}

	c.Calendar = append(c.Calendar[:index], append([][2]int{{start, end}}, c.Calendar[index:]...)...)
	return true
}
