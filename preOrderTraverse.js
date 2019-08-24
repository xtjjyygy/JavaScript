#递归
TraversTree(root) {
    if (!root) {
        return []
    }
    this.result.push(root.val)
    this.TraversTree(root.left)
    this.TraversTree(root.right)
    return this.result
}

#循环
TraversTree(root) {
    if (!root) {
        return []
    }
    var stack = [root];
    var result = [];
    while (stack.length >0) {
        var item = stack.shift();
        result.push(item.val)
        if (item.right) {
            stack.unshift(item.right)
        }
        if (item.left) {
            stack.unshift(item.left)
        }

    }
    return result
}
