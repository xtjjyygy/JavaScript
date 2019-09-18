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


#方法二:通用方法

function add(...args1) {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = [...args1];
    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function () {
        _args.push(...arguments);
        return _adder;
    };
 
    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce( (a, b) => a + b);
    }
    return _adder;
}

result = add(1,2,3)(4,5,6) 
console.log(result)
