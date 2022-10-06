export const swap = (arr, index1, index2) => {
  ;[arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

export const print = (head) => {
  const arr = []
  let current = head
  while (current) {
    arr.push(current.val)
    current = current.next
  }
  return arr
}
