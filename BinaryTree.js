class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  get isLeaf() {
    return this.left === null && this.right === null
  }
  get hasChildren() {
    return !this.isLeaf
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null
  }

  //   insert node
  insertNode(value) {
      debugger
    let newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
      return this
    }
    let currentNode = this.root
    while (currentNode) {
      if (currentNode.value === value) return undefined
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode
          return this
        }
        currentNode = currentNode.left
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode
          return this
        }
        currentNode = currentNode.right
      }
    }
  }
}

const BST = new BinarySearchTree()

BST.insertNode(11)
BST.insertNode(9)
BST.insertNode(10)
BST.insertNode(20)
BST.insertNode(8)

console.log('Binary Search Tree', BST)
