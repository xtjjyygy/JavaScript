class LinkList{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Solution{
    crateLinkList(nums) {
        if (nums.length == 0) {
            return null;
        }
        var dummy = new LinkList(0)
        var head = dummy
        for (var i=0;i<nums.length;i++) {
            head.next = new LinkList(nums[i])
            head = head.next
        }
        return dummy.next
    }
    TraverseLink(head) {
        if (!head) {
            return null;
        }
        var curr = head;
        var pre = null;
        while (curr) {
            var _next = curr.next;
            curr.next = pre
            pre = curr
            curr = _next
        }
        return pre
    }
}

var nums = [1,2,3,4,5,6]
var sol = new Solution()
linktable = sol.crateLinkList(nums)
traverse = sol.TraverseLink(linktable)
while (traverse) {
    console.log(traverse.val)
    traverse = traverse.next;
}
