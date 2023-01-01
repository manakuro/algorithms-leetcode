function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * isBalanced - DFS
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function (root) {
  /**
   * @param {TreeNode} node
   * @return {{isBalanced: boolean, height: number}}
   */
  const traverse = (node) => {
    if (!node) return { isBalanced: true, height: 0 }

    const left = traverse(node.left)
    const right = traverse(node.right)
    const isBalanced =
      left.isBalanced &&
      right.isBalanced &&
      Math.abs(left.height - right.height) <= 1

    return {
      isBalanced,
      height: 1 + Math.max(left.height, right.height),
    }
  }

  return traverse(root).isBalanced
}

const tree = new TreeNode(3)
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(15)
tree.right.right = new TreeNode(7)

console.log(isBalanced(tree))

const tree2 = new TreeNode(1)
tree2.left = new TreeNode(2)
tree2.right = new TreeNode(2)
tree2.left.left = new TreeNode(3)
tree2.left.right = new TreeNode(3)
tree2.left.left.left = new TreeNode(4)
tree2.left.left.right = new TreeNode(4)

console.log(isBalanced(tree2))
