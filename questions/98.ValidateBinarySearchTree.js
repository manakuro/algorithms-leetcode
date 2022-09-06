function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * isValidBST - DFS
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function (root) {
  const traverse = (node, left, right) => {
    if (!node) return true
    if (!(node.val > left && node.val < right)) return false

    return (
      traverse(node.left, left, node.val) &&
      traverse(node.right, node.val, right)
    )
  }

  return traverse(root, -Infinity, Infinity)
}
const tree = new TreeNode(2)
tree.left = new TreeNode(1)
tree.right = new TreeNode(3)

console.log(isValidBST(tree))

// const tree2 = new TreeNode(5)
// tree2.left = new TreeNode(1)
// tree2.right = new TreeNode(4)
// tree2.right.left = new TreeNode(3)
// tree2.right.right = new TreeNode(6)
//
// console.log(isValidBST(tree2))

// const tree3 = new TreeNode(2)
// tree3.left = new TreeNode(2)
// tree3.right = new TreeNode(2)
//
// console.log(isValidBST(tree3))
