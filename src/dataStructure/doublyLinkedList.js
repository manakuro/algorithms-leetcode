class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    const newNode = new Node(val)

    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++

    return this
  }
  pop() {
    if (this.length === 0) return

    const popped = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = popped.prev
      this.tail.next = null
      popped.prev = null
    }

    this.length--

    return popped
  }
  shift() {
    if (this.length === 0) return

    const shifted = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = shifted.next
      this.head.prev = null
      shifted.next = null
    }
    this.length--

    return shifted
  }
  unshift(val) {
    const newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      const currentHead = this.head
      currentHead.prev = newNode

      this.head = newNode
      this.head.next = currentHead
    }
    this.length++

    return this
  }
  get(index) {
    if (index < 0) return
    if (index >= this.length) return

    let current
    let count
    let node
    const middle = Math.floor(this.length / 2)
    if (middle > index) {
      current = this.head
      count = 0
      while (current) {
        if (count === index) {
          node = current
          break
        }
        current = current.next
        count++
      }
    } else {
      current = this.tail
      count = this.length - 1
      while (current) {
        if (count === index) {
          node = current
          break
        }

        current = current.prev
        count--
      }
    }

    return node
  }
  set(index, val) {
    const node = this.get(index)
    if (!node) return false

    node.val = val
    return true
  }
  insert(index, val) {
    if (0 > index) return false
    if (index > this.length) return false

    if (index === this.length) return !!this.push(val)
    if (index === 0) return !!this.unshift(val)

    const newNode = new Node(val)
    const prevNode = this.get(index - 1)
    const nextNode = prevNode.next

    newNode.next = nextNode
    newNode.prev = prevNode

    prevNode.next = newNode
    nextNode.prev = newNode

    this.length++

    return true
  }
  remove(index) {
    if (index < 0) return
    if (index >= this.length) return
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    const removed = this.get(index)
    removed.prev.next = removed.next
    removed.next.prev = removed.prev
    removed.next = null
    removed.prev = null

    this.length--

    return removed
  }
  print() {
    const arr = []
    let current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }
}

const list = new DoublyLinkedList()
list.push('push1')
list.push('push2')
list.push('push3')
list.pop()
list.print()
list.shift()
list.print()
list.unshift('unshift1')
list.print()
list.unshift('unshift2')
list.print()
list.set(2, 'set1')
list.insert(3, 'hey')
list.remove(2)
list.print()
