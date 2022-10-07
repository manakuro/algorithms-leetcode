class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

/**
 * Given a binary tree, return its level order traversal but in alternate left to right order.
 *
 * @param {TreeNode} root
 *
 * @return {number[][]}
 */
function zigZagTraversal(root) {
  const queue = []
  const result = []
  let reverse = false

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
    if (!data.length) continue

    let arr = []
    if (reverse) {
      for (let i = data.length - 1; i >= 0; i--) {
        arr.push(data[i])
      }
      // or data.reverse()
    } else {
      arr = data
    }

    result.push(arr)
    reverse = !reverse
  }
  return result
}

const tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.left.left = new TreeNode(4)
tree.left.right = new TreeNode(5)
tree.left.left.left = new TreeNode(7)
tree.left.left.right = new TreeNode(8)

tree.right = new TreeNode(3)
tree.right.right = new TreeNode(6)

const res = zigZagTraversal(tree)
console.log(res) // [ [ 1 ], [ 3, 2 ], [ 4, 5, 6 ], [ 8, 7 ] ]
