const obj1 = {user: {name: 'ahhh'}};
const obj2 = obj1;

obj2.user.name = 'ahhh2';

// 你的数据被重新赋值给另外一个变流量
// 或则传进一个方法后
// 很有可能被误修改
console.log(obj1.user.name);

//TODO 怎么防止出现以上情况，这就是immutable诞生的原因

function invoke(obj){
  obj.name = '11';
}

let immutable = require('immutable');

function handle(){
  let obj = immutable.fromJS({name: 'ahhh'});
  invoke(obj);
  console.log(obj.get('name'));
}

handle();

//1. 降低复杂度
//2. 节约内存
//3. 方便回溯
