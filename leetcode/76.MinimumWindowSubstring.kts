class Solution {
  fun minWindow(s: String, t: String): String {
    if (t.isEmpty()) return ""

    val tMap = mutableMapOf<Char, Int>()
    val window = mutableMapOf<Char, Int>()

    for (char in t) {
      tMap[char] = tMap.getOrDefault(char, 0) + 1
    }

    var have = 0
    val need = tMap.keys.size
    val result = intArrayOf(-1, -1)
    var length = Int.MAX_VALUE
    var left = 0

    for (right in s.indices) {
      val char = s[right]
      window[char] = window.getOrDefault(char, 0) + 1

      if (char in tMap && window[char] == tMap[char]) {
        have++
      }

      while (have == need) {
        if (right - left + 1 < length) {
          result[0] = left
          result[1] = right
          length = right - left + 1
        }

        window[s[left]] = window[s[left]]!! - 1
        if (s[left] in tMap && window[s[left]]!! < tMap[s[left]]!!) {
          have--
        }
        left++
      }
    }

    if (length == Int.MAX_VALUE) return ""

    val (l, r) = result

    return s.substring(l, r + 1)
  }
}
