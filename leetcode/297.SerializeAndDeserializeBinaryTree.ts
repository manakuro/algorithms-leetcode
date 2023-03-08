import { TreeNode } from './shared'

function serialize(root: TreeNode | null): string {
  const result: string[] = []

  const dfs = (node: TreeNode | null) => {
    if (!node) {
      result.push('null')
      return
    }

    result.push(String(node.val))
    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)

  return result.join(',')
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const values = data.split(',')
  let i = 0

  const dfs = (): TreeNode | null => {
    if (values[i] === 'null') {
      i++
      return null
    }

    const node = new TreeNode(Number(values[i]))
    i++
    node.left = dfs()
    node.right = dfs()

    return node
  }

  return dfs()
}

const tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.right = new TreeNode(3)
tree.right.left = new TreeNode(4)
tree.right.right = new TreeNode(5)

const serialized = serialize(tree)
console.log(serialized)
console.log(deserialize(serialized))
