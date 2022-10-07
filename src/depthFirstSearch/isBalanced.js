class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

/**
 * A balanced binary tree is defined as a tree such that either it is an empty tree, or all its subtree are balanced and has a height difference of at most 1.
 *
 * In that case, given a binary tree, determine if it's balanced.
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
  const dfs = (node) => {
    if (!node) {
      return {
        isBalanced: true,
        height: 0,
      }
    }

    const left = dfs(node.left)
    const right = dfs(node.right)
    const isBalanced =
      left.isBalanced &&
      right.isBalanced &&
      Math.abs(left.height - right.height) <= 1

    return {
      isBalanced,
      height: 1 + Math.max(left.height, right.height),
    }
  }

  return dfs(root).isBalanced
}

const tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.left.left = new TreeNode(4)
tree.left.right = new TreeNode(5)
tree.left.left.right = new TreeNode(7)

tree.right = new TreeNode(3)
tree.right.right = new TreeNode(6)

const res = isBalanced(tree)
console.log(res)
