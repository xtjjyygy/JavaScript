#Binary tree path
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
    FindPath(root,expectNumber) {
        if (!root) {
            return []
        }
        var res = [];
        var path = [];
        this.Find(root,expectNumber,res,path);
        return res;

    }
    Find(root,expectNumber,res,path) {
        if (!root) {
            return []
        }
        path.push(root.val)
        var isleaf = (root.left == null && root.right == null)
        if (isleaf && root.val == expectNumber) {
            res.push(path.slice())
        }
        if (root.left) {
            this.Find(root.left,expectNumber-root.val,res,path)
        }
        if (root.right) {
            this.Find(root.right,expectNumber-root.val,res,path)
        }
        path = path.pop()
    }
}

var sol = new Solution()
var nums = [1,2,3,4,5,6,7]
var root = sol.CreateTree(nums);
result = sol.FindPath(root,7)
console.log(result[0])
