class TimeMap {
  map: Record<string, { value: string; timestamp: number }[]> = {}

  set(key: string, value: string, timestamp: number): void {
    this.map[key] ||= []
    this.map[key].push({ value, timestamp })
  }

  get(key: string, timestamp: number): string {
    if (!this.map[key]?.length) return ''

    const values = this.map[key]
    let result = ''
    let left = 0
    let right = values.length - 1

    while (left <= right) {
      const middle = Math.floor((left + right) / 2)

      if (values[middle].timestamp <= timestamp) {
        result = values[middle].value
        left = middle + 1
      } else {
        right = middle - 1
      }
    }

    return result
  }
}

const timeMap = new TimeMap()
timeMap.set('foo', 'bar', 1)
console.log(timeMap.get('foo', 1))
console.log(timeMap.get('foo', 3))

timeMap.set('foo', 'bar2', 4)
console.log(timeMap.get('foo', 4))
console.log(timeMap.get('foo', 5))
