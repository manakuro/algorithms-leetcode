class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

/**
 * Given the root node of a valid BST and a value to insert into the tree, return a new root node representing the valid BST with the addition of the new item. If the new item already exists in the binary search tree, do not insert anything.
 *
 * You must expand on the original BST by adding a leaf node. Do not change the structure of the original BST.
 *
 * @param {TreeNode} bst
 * @param {number} val
 * @return {TreeNode}
 */
function insertBst(bst, val) {
  if (!bst) return new TreeNode(val)
  if (bst.val < val) {
    bst.right = insertBst(bst.right, val)
  } else if (bst.val > val) {
    bst.left = insertBst(bst.left, val)
  }
  return bst
}

const tree = new TreeNode(6)
tree.left = new TreeNode(4)
tree.left.left = new TreeNode(3)
tree.left.right = new TreeNode(5)
tree.right = new TreeNode(8)

console.log(insertBst(tree, 8))
