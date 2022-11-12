package questions

func canPartition(nums []int) bool {
	sum := 0
	for _, num := range nums {
		sum += num
	}

	if sum%2 != 0 {
		return false
	}

	return canPartitionRecursive(map[int]map[int]bool{}, nums, sum/2, 0)
}

func canPartitionRecursive(dp map[int]map[int]bool, nums []int, sum, index int) bool {
	if sum == 0 {
		return true
	}

	if len(nums) == 0 {
		return false
	}
	if index >= len(nums) {
		return false
	}

	_, ok := dp[index]
	if !ok {
		dp[index] = map[int]bool{}
	}

	if _, ok := dp[index][sum]; !ok {
		// e.g. nums = [1,5,11,5], sum = 11
		// 1, 5, 5 is coming.
		if nums[index] <= sum {
			if canPartitionRecursive(dp, nums, sum-nums[index], index+1) {
				dp[index][sum] = true
				return true
			}
		}
	}

	// e.g. nums = [1,5,11,5], sum = 11
	// 11 is coming.
	dp[index][sum] = canPartitionRecursive(dp, nums, sum, index+1)

	return dp[index][sum]
}
