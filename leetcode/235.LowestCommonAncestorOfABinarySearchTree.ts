import { TreeNode } from './shared'

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  let current = root

  while (current) {
    if (current.val < Number(p?.val) && current.val < Number(q?.val)) {
      current = current.right
    } else if (current.val > Number(p?.val) && current.val > Number(q?.val)) {
      current = current.left
    } else {
      return current
    }
  }

  return null
}

const tree = new TreeNode(6)
tree.left = new TreeNode(2)
tree.left.left = new TreeNode(0)
tree.left.right = new TreeNode(4)
tree.left.right.left = new TreeNode(3)
tree.left.right.right = new TreeNode(5)

tree.right = new TreeNode(8)
tree.right.left = new TreeNode(7)
tree.right.right = new TreeNode(9)

console.log(lowestCommonAncestor(tree, tree.left, tree.right)?.val)
