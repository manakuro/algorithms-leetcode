import { TreeNode } from './shared'

function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = []
  const queue: (TreeNode | null)[] = []

  queue.push(root)
  while (queue.length) {
    const length = queue.length
    const values: number[] = []
    for (let i = 0; i < length; i++) {
      const node = queue.shift()

      if (node) {
        values.push(node.val)
        queue.push(node.left)
        queue.push(node.right)
      }
    }

    if (values.length) result.push(values)
  }

  return result
}
const tree = new TreeNode(3)
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(15)
tree.right.right = new TreeNode(7)

const res = levelOrder(tree)
console.log(res)
