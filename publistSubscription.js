//主题
class Dep{
  constructor(callback){
    this.subs=[];
    //每个主题更新数据的方法不一样，所以需要传进来
    this.callback=callback;
  }
  addSub(sub){
    this.subs.push(sub);
    return this;
  }
  notify(){
    //通知此主题所有订阅者更新数据
    this.subs.forEach(item=>item.update(this.callback))
  }
}
//订阅者（Watcher）
class Sub{
  constructor(val) {
    this.val=val
  }
  update(callback){
    this.val=callback(this.val);
    //相当于更新视图操作
    console.log(this.val);
  }
}
//发布者
class Pub{
  constructor(){
    this.deps=[];
  }
  addDep(dep){
    this.deps.push(dep)
  }
  removeDep(dep){
    let index=this.deps.indexOf(dep);
    if(index!==-1){
      this.deps.splice(index,1);
      return true
    }else{
      return false
    }
  }
  publish(dep){
  	//发布某个主题的更新
    this.deps.forEach(item=>item == dep && item.notify());
  }
}

//新建主题， 并向主题中增加订阅者
let dep1=new Dep(item=>item*item);
dep1.addSub(new Sub(1)).addSub(new Sub(2)).addSub(new Sub(3));
//新建发布者， 并向发布者中增加主题
let pub=new Pub();
pub.addDep(dep1);
//发布者发布， 通知所有主题的所有订阅者更新
pub.publish(dep1);
//发布者发布， 通知所有主题的所有订阅者更新
pub.publish(dep1);
console.log("===========================");
//新建主题， 并向主题中增加订阅者
let dep2=new Dep(item=>item+item);
dep2.addSub(new Sub(1)).addSub(new Sub(2)).addSub(new Sub(3));
//向发布者中增加主题
pub.addDep(dep2);
//发布者发布， 通知所有主题的所有订阅者更新
pub.publish(dep2);
//发布者发布， 通知所有主题的所有订阅者更新
pub.publish(dep2);
