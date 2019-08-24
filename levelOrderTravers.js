#方法一，递归
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
        this.sol = [[]];
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
    TraversTree(root) {
        this.helper(root,1)
        return this.sol.slice(0,-1)
    }
    helper(node,level) {
        if (!node) {
            return []
        } else {
            this.sol[level-1].push(node.val)
            if (this.sol.length == level) {
                this.sol.push([])
            }
            this.helper(node.left,level+1)
            this.helper(node.right,level+1)
        }
    }    
}

var nums = [1,2,3,4,5,6];
var bTree = new binaryTree();
root = bTree.createTree(nums)

result = bTree.TraversTree(root)
result.forEach(element => {
    console.log(element)
});

#方法二，循环
  TraversTree(root) {
      var stack = [root];
      var newStack = [];
      var result = [];
      while (stack.length>0) {
          var temp = [];
          stack.forEach(element => {
              temp.push(element.val)
              if (element.left) {
                  newStack.push(element.left)
              }
              if (element.right) {
                  newStack.push(element.right)
              }

          })
          result.push(temp)
          stack = newStack
          newStack = []
      }
      return result;
  } 
