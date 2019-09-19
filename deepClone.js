function deepClone(obj){
    let _obj = JSON.stringify(obj),
        objClone = JSON.parse(_obj);
    return objClone
}    
let a=[0,1,[2,3],4],
    b=deepClone(a);
a[0]=1;
a[2][0]=1;
console.log(a,b);

function deepClone1(obj){
    var newObj= obj instanceof Array?[]:{};
    for(var i in obj){
        newObj[i]=typeof obj[i]=='object'? deepClone1(obj[i]):obj[i];
    }
    return newObj;
}

let n = [1,2,[3,4,[5,6]]]
o = deepClone1(n)
console.log(o)
