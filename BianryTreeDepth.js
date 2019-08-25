class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    CreateTree(nums) {
        if (nums.length == 0) {
            return null
        }
        var mid = Math.floor(nums.length/2);
        var root = new TreeNode(nums[mid])
        root.left = this.CreateTree(nums.slice(0,mid))
        root.right = this.CreateTree(nums.slice(mid+1,))
        return root;
    }
    maxDepth(root) {
        if (!root) {
            return 0;
        } else {
            var leftDepth = this.maxDepth(root.left)
            var rightDepth = this.maxDepth(root.right)
            return (Math.max(leftDepth,rightDepth) + 1)
        }
    }
}
var sol = new Solution()
var nums = [1,2,3,4,5,6,7]
var root = sol.CreateTree(nums);
result = sol.maxDepth(root)
console.log(result)
