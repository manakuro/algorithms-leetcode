function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (!root) return []

  const result = []
  const queue = []

  queue.push(root)
  while (queue.length) {
    const length = queue.length
    const data = []
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      if (node) {
        data.push(node.val)
        queue.push(node.left)
        queue.push(node.right)
      }
    }
    if (data.length) result.push(data)
  }

  return result
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

const tree = new TreeNode(3)
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(15)
tree.right.right = new TreeNode(7)

const res = levelOrder(tree)
console.log(res)
