var nums = [1,2,3,4,5];
console.log(nums instanceof Array)
console.log(nums.constructor == Array)
console.log(Array.prototype.isPrototypeOf(nums))
console.log(Array.isArray(nums))
