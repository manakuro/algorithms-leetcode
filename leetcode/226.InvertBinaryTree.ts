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
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null

  const tmp = root.left
  root.left = root.right
  root.right = tmp

  invertTree(root.left)
  invertTree(root.right)

  return root
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

invertTree(tree)
