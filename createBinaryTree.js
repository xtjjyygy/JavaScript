#insert
const node = [7,1,9,3,2,6,4,5]

//节点类
class Node {
    constructor(key) {
        this.left = null
        this.right = null
        this.key = key
    }
}

//二叉树类
class BinaryTree {
    constructor() {
        this.root = null
        this.result = []
    }
    insert (key) {
        const newNode = new Node(key)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.inOrderTraversNode(this.root, newNode)
        }
    }
    inOrderTraversNode (node, newNode) {
        if (newNode.key < node.key) { // 左插
            if (node.left === null) {
                node.left = newNode
            }else{
                this.inOrderTraversNode(node.left, newNode)
            }    
        } else { // 右插
            if (node.right === null) {
                node.right = newNode
            } else {
                this.inOrderTraversNode(node.right, newNode)
            }
        }
    }
    preOrderTraverse(root) {
        if (!root) {
            return []
        }
        this.result.push(root.key)
        var left = root.left;
        var right = root.right;
        left && this.preOrderTraverse(left)
        right && this.preOrderTraverse(right)
        return this.result;
    }
}

const binaryTree = new BinaryTree()
node.map(function(item) {
    binaryTree.insert(item)
})

root = binaryTree.root

console.log(binaryTree.preOrderTraverse(root))


#nums insert
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left =null;
        this.right = null;
    }
}

class binaryTree {
    constructor() {
        this.result = [];
    }
    createTree(nums) {
        if (nums.length == 0) {
            return null;
        }
        var mid = Math.floor(nums.length/2);
        var BT = new TreeNode(nums[mid])
        BT.left = this.createTree(nums.slice(0,mid))
        BT.right = this.createTree(nums.slice(mid+1,))
        return BT
    }
    preTraversTree(root) {
        if (!root) {
            return []
        }
        this.preTraversTree(root.left)
        this.result.push(root.val)
        this.preTraversTree(root.right)
        return this.result
    }
}

var nums = [1,2,3,4,5,6];
var bTree = new binaryTree();
root = bTree.createTree(nums)
console.log(root)

console.log(bTree.preTraversTree(root))
