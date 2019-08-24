#循环
TraversTree(root) {
    if (!root) {
        return []
    }
    var stack = [];
    var result = [];
    var curr = root;
    while (stack.length>0 || curr != null) {
        while (curr != null) {
            stack.push(curr)
            curr = curr.left
        }
        curr = stack.pop()
        result.push(curr.val)
        curr = curr.right;
    }
    return result;
}

#递归
TraversTree(root) {
    if (!root) {
        return []
    }
    var stack = [];
    var result = [];
    var curr = root;
    while (stack.length>0 || curr != null) {
        while (curr !=null) {
            stack.push(curr)
            curr = curr.left;
        }
        curr = stack.pop()
        result.push(curr.val);
        curr = curr.right;
    }
    return result;
}
