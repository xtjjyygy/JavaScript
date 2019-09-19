function myPromise(constructor){
    let self=this;
    self.status="pending" //定义状态改变前的初始状态
    self.value=undefined;//定义状态为resolved的时候的状态
    self.reason=undefined;//定义状态为rejected的时候的状态
    function resolve(value){
        //两个==="pending"，保证了状态的改变是不可逆的
       if(self.status==="pending"){
          self.value=value;
          self.status="resolved";
       }
    }
    function reject(reason){
        //两个==="pending"，保证了状态的改变是不可逆的
       if(self.status==="pending"){
          self.reason=reason;
          self.status="rejected";
       }
    }
    //捕获构造异常
    try{
       constructor(resolve,reject);
    }catch(e){
       reject(e);
    }
}
myPromise.prototype.then=function(onFullfilled,onRejected){
    let self=this;
    switch(self.status){
       case "resolved":
         onFullfilled(self.value);
         break;
       case "rejected":
         onRejected(self.reason);
         break;
       default:       
    }
 }


//promise.all

function promiseAll(promises){
	return new Promise(function(resolve,reject){
		if(!Array.isArray(promises)){
			return reject(new TypeError("argument must be anarray"))
		}
		var countNum=0;
		var promiseNum=promises.length;
		var resolvedvalue=new Array(promiseNum);
		for(var i=0;i<promiseNum;i++){
            (function(i){
            	Promise.resolve(promises[i]).then(function(value){
            		countNum++;
            		resolvedvalue[i]=value;
            		if(countNum===promiseNum){
            			return resolve(resolvedvalue)
            		}
            	},function(reason){
            		return reject(reason)
            	})
 
            })(i)
        }
	})
}
 
var p1=Promise.resolve(1),
    p2=Promise.resolve(2),
    p3=Promise.resolve(3);
 
 promiseAll([p1,p2,p3]).then(function(value){
 	console.log(value)
 
 })
var p=new myPromise(function(resolve,reject){resolve(1)});
p.then(function(x){console.log(x)})
//输出1
