function add () {
    var args = Array.prototype.slice.call(arguments);
  
    var fn = function () {
      var sub_arg = Array.prototype.slice.call(arguments);
  　　 // 把全部的参数聚集到参数的入口为一个参数： args.concat(sub_arg)
      return add.apply(null, args.concat(sub_arg));
    }
  
    fn.valueOf = function () {
    return args.reduce(function(a, b) {
        return a + b;
      })
    }
  
    return fn;
  }
  console.log(add(1,2)) // 3
  console.log(add(1)(2)) // 3
  console.log(add(1)(2)(3)(4)) // 6
  console.log(add(1,2,3)(4)) // 10
