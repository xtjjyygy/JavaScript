#递归
TraversTree(root) {
    if (!root) {
        return []
    }
    this.TraversTree(root.left)
    this.TraversTree(root.right)
    this.result.push(root.val)
    return this.result;
}

#循环
 TraversTree(root) {
      if (!root) {
          return []
      }
      var stack = [];
      var result = [];
      var curr = root;
      while (curr != null || stack.length>0) {
          if (curr!=null) {
              result.push(curr.val)
              stack.push(curr.left)
              curr = curr.right;
          } else {
              curr = stack.pop()
          }

      }
      return result.reverse();
  }
