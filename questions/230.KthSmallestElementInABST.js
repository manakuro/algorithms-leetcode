function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (root, k) {
  let n = 0
  const stack = []
  let current = root

  while (current || stack.length) {
    while (current) {
      stack.push(current)
      current = current.left
    }

    current = stack.pop()
    n++
    if (n === k) return current.val

    current = current?.right
  }
}
const tree = new TreeNode(3)
tree.left = new TreeNode(1)
tree.left.right = new TreeNode(2)
tree.right = new TreeNode(4)

console.log(kthSmallest(tree, 1))

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallestByRecursively = function (root, k) {
  const result = []
  const traverse = (node) => {
    if (node.left) traverse(node.left)
    result.push(node.val)
    if (node.right) traverse(node.right)
  }

  traverse(root)

  console.log(result)

  return result[k - 1]
}
const tree2 = new TreeNode(5)
tree2.left = new TreeNode(3)
tree2.right = new TreeNode(6)
tree2.left.right = new TreeNode(4)
tree2.left.left = new TreeNode(2)
tree2.left.left.left = new TreeNode(1)

console.log(kthSmallestByRecursively(tree2, 3))
