class MyQueue() {
    private val values = mutableListOf<Int>()

    fun push(x: Int) {
        values.add(x)
    }

    fun pop(): Int {
        return values.removeAt(0)
    }

    fun peek(): Int {
        return values[0]
    }

    fun empty(): Boolean {
        return values.isEmpty()
    }
}
