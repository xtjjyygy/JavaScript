//创建一个0-99的数组
//方法一
var result = Array.from(new Array(100).keys())
console.log(result)

//方法二
var result = Array.from({length:100},(v,k)=>k);
console.log(result)

//方法三
var result = [...Array(100).keys()]
console.log(result);

//方法四
var result = Object.keys(Array.from({length:100})).map(function(item){
    return parseInt(item);
});
console.log(result)
