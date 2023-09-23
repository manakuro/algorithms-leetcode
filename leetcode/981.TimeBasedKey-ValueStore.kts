class TimeMap() {
  private val map: MutableMap<String, MutableList<Pair<Int, String>>> = mutableMapOf()

  fun set(key: String, value: String, timestamp: Int) {
    map.getOrPut(key) { mutableListOf() }.add(timestamp to value)
  }

  fun get(key: String, timestamp: Int): String {
    val entries = map[key] ?: return ""

    var left = 0
    var right = entries.size - 1
    var result = ""

    while (left <= right) {
      val middle = (left + right) / 2

      if (entries[middle].first <= timestamp) {
        result = entries[middle].second
        left = middle + 1
      } else {
        right = middle - 1
      }
    }

    return result
  }
}
