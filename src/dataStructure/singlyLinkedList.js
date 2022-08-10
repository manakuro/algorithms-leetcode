class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const node = new Node(val)
    if (!this.head) {
      this.head = node
      this.tail = this.head
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) return undefined

    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return current
  }

  shift() {
    if (!this.head) return undefined
    const currentHead = this.head
    this.head = currentHead.next
    this.length--

    if (this.length === 0) {
      this.tail = null
    }

    return currentHead
  }
  unshift(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++

    return newNode
  }

  get(index) {
    if (0 > index) return
    if (index > this.length) return

    let counter = 0
    let current = this.head
    while (counter !== index) {
      current = current.next
      counter++
    }
    return current
  }
  set(index, val) {
    const node = this.get(index)
    if (node) {
      node.val = val
      return true
    }
    return false
  }
  insert(index, val) {
    if (0 > index) return false
    if (index > this.length) return false

    if (index === this.length) return !!this.push(val)
    if (index === 0) return !!this.unshift(val)

    const newNode = new Node(val)
    const prev = this.get(index - 1)
    const prevNext = prev.next

    prev.next = newNode
    newNode.next = prevNext
    this.length++

    return true
  }
  remove(index) {
    if (index < 0) return
    if (index >= this.length) return
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    const prev = this.get(index - 1)
    const removed = prev.next
    prev.next = removed.next
    this.length--

    return removed
  }
  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node

    let prev = null
    let next = null
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
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

const list = new SinglyLinkedList()
list.push('Hello')
list.push('Good bye')
list.push('!')
list.insert(0, 'First')
list.print()
list.reverse()
list.print()
