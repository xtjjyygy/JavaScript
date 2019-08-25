/*object Assign Object Create
refer:https://blog.csdn.net/m0_38102188/article/details/86592136
*/
/*
作用：将一个或多个源对象自身的可枚举属性与目标对象的属性合并
返回值：合并后的目标对象
即：后面的覆盖前面的熟悉，住前合并
*/
let obj1 = {'name':'ji'}
let obj2 = {'name':'tang','age':24}
let obj3 = {'name':'zhang','age':23}

objResult = Object.assign(obj1,obj2,obj3)
console.log(objResult)
console.log(obj1)

//Object create
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function() {
    alert(this.name)
}
function Worker(name, age) {
    Person.call(this, name, age)
}
var worker = new Worker('zyp', 18)
console.log(worker) 

//子类继承父类的原型属性
Worker.prototype = Object.create(Person.prototype)
Worker.prototype.constructor = Worker
console.log(worker)

