/**
 * What is the minimum amount of time it would take to have your coworkers go through all the newspapers?
 *
 * @param {number[]} newspapersReadTimes
 * @param {number} numCoworkers
 * @return {number}
 */
function newspapersSplit(newspapersReadTimes, numCoworkers) {
  let low = Math.max(...newspapersReadTimes)
  let high = newspapersReadTimes.reduce((acc, v) => acc + v, 0)
  while (low <= high) {
    const middle = Math.floor((low + high) / 2)
    if (feasible(newspapersReadTimes, numCoworkers, middle)) {
      high = middle - 1
    } else {
      low = middle + 1
    }
  }

  return high + 1
}

const feasible = (newspaperReadTimes, numCoworkers, limit) => {
  let time = 0
  let numWorkers = 0
  for (const newspaperReadTime of newspaperReadTimes) {
    if (time + newspaperReadTime > limit) {
      time = 0
      numWorkers++
    }
    time += newspaperReadTimes
  }
  if (time !== 0) {
    numWorkers++
  }
  return numWorkers <= numCoworkers
}

console.log(newspapersSplit([7, 2, 5, 10, 8], 2))
