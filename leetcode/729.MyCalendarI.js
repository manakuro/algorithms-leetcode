class MyCalendar {
  constructor() {
    this.calendar = []
  }

  /**
   *
   * @param {number} start
   * @param {number} end
   * @return {boolean}
   */
  book(start, end) {
    let left = 0
    let right = this.calendar.length - 1
    let index = this.calendar.length

    while (left <= right) {
      const middle = Math.floor((left + right) / 2)

      if (this.calendar[middle][0] > start) {
        index = middle
        right = middle - 1
      } else {
        left = middle + 1
      }
    }

    if (index > 0 && this.calendar[index - 1][1] > start) return false
    if (index < this.calendar.length && this.calendar[index][0] < end)
      return false

    this.calendar.splice(index, 0, [start, end])
    return true
  }
}
console.log(new MyCalendar())
