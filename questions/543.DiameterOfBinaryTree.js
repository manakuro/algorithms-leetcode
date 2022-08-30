function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = function (root) {
  let result = 0

  const traverse = (node) => {
    if (!node) return -1
    const left = traverse(node.left)
    const right = traverse(node.right)

    result = Math.max(result, 2 + left + right)

    return 1 + Math.max(left, right)
  }

  traverse(root)

  return result
}

const tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.left.left = new TreeNode(4)
tree.left.right = new TreeNode(5)

tree.right = new TreeNode(3)

console.log(diameterOfBinaryTree(tree))
