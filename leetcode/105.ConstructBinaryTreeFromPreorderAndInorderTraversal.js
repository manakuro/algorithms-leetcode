function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// e.g.
// root = 3
// inorder = [9,3,15,20,7]
// left tree = [9]
// right tree = [15,20,7]
const buildTree = function (preorder, inorder) {
  if (!preorder.length) return null
  if (!inorder.length) return null

  const root = new TreeNode(preorder[0])
  const midIndex = inorder.findIndex((o) => o === preorder[0])
  console.log(midIndex)
  root.left = buildTree(
    preorder.slice(1, midIndex + 1),
    inorder.slice(0, midIndex),
  )
  root.right = buildTree(
    preorder.slice(midIndex + 1),
    inorder.slice(midIndex + 1),
  )

  return root
}

const tree = new TreeNode(3)
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(15)
tree.right.right = new TreeNode(7)

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))

// left tree
console.log([3, 9, 20, 15, 7].slice(1, 2)) // [9]
console.log([9, 3, 15, 20, 7].slice(0, 1)) // [9]

// right tree
console.log([3, 9, 20, 15, 7].slice(2)) // [20,15,7]
console.log([9, 3, 15, 20, 7].slice(2)) // [15,20,7]
