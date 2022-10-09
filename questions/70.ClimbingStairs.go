package questions

func climbStairs(n int) int {
	one := 1
	two := 1
	temp := 0

	for i := 0; i < n-1; i++ {
		temp = one
		one = one + two
		two = temp
	}

	return one
}

//result := climbStairs(3)
//
//fmt.Printf("%+v", result)
