function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
  if (!root) return null

  let tmp = root.left
  root.left = root.right
  root.right = tmp

  invertTree(root.left)
  invertTree(root.right)

  return root
}

DFSPreOrder = (root) => {
  const data = []

  const traverse = (node) => {
    data.push(node.val)
    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)
  }

  traverse(root)

  return data
}

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
const tree = new TreeNode(4)
tree.left = new TreeNode(2)
tree.left.left = new TreeNode(1)
tree.left.right = new TreeNode(3)
tree.right = new TreeNode(7)
tree.right.left = new TreeNode(6)
tree.right.right = new TreeNode(9)

const inverted = invertTree(tree)
// [4,7,9,6,2,3,1]
console.log(DFSPreOrder(inverted))
