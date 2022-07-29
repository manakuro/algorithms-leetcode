// Sliding Window
// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// [1,2,3,4,5,6]の場合
// 1. 最初に[1,2,3] = 6をmaxSumにする
// 2. 次に、[1,2,3]のうち「1」だけを引いた値を求める ... temSum - arr[i - num]
// 3. 「2」の値と次の配列の値を足す ... temSum - arr[i - num] + arr[i]
// 4. 前回の値と「3」で計算した値を比較し、大きければ更新する ... maxSum = Math.max(maxSum, tempSum);
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null

  let maxSum = 0
  let tempSum = 0
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  tempSum = maxSum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }

  return maxSum
}
console.log(maxSubarraySum([1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10], 2))
