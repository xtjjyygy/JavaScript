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
    isSymmetric(root) {
        return this.match(root,root);
    }
    match(l,r) {
        if (!l && !r) {
            return true;
        }
        if (!l || !r) {
            return false;
        }
        return (l.val == r.val && this.match(l.left,r.right) && this.match(l.right,r.left))        
    }
}
var sol = new Solution()
var nums = [1,2,3,4,3,2,1]
var root = sol.CreateTree(nums);
result = sol.isSymmetric(root)
console.log(result)
