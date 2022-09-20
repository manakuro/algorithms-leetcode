function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function (root) {
  const result = []

  const traverse = (node) => {
    if (!node) {
      result.push('null')
      return
    }
    result.push(String(node.val))
    traverse(node.left)
    traverse(node.right)
  }

  traverse(root)

  return result.join(',')
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function (data) {
  // e.g. [1,2,null,null,3,4,null,null,5,null,null]
  const values = data.split(',')

  let i = 0
  const traverse = () => {
    if (values[i] === 'null') {
      i++
      return null
    }

    const node = new TreeNode(Number(values[i]))
    i++
    node.left = traverse()
    node.right = traverse()

    return node
  }

  return traverse()
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
const tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.right = new TreeNode(3)
tree.right.left = new TreeNode(4)
tree.right.right = new TreeNode(5)

const serialized = serialize(tree)
console.log(serialized)
console.log(deserialize(serialized))
