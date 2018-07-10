let immutable = require('immutable');

let {Map, List} = immutable;

let obj1 = immutable.fromJS({name: 'ahhh', age: 111,home:{name:'成都',number:0}});
console.log('obj1:', obj1); // Map { "name": "ahhh", "age": 111 }

//TODO setIn，相较于set能设置多层的数据，但必须搭配fromJS
let obj2 = obj1.setIn(['home','name'],'山东');

console.log(obj2);
//Map { "name": "ahhh", "age": 111, "home": Map { "name": "山东" } }

//TODO get,getIn 获取值
console.log(obj2.get('name'), obj2.getIn(['home', 'name']));
//ahhh 山东

//TODO 更新 update,updateIn
let obj3 = obj2.update('age', val => val + 1);
console.log('obj2:', obj2); //obj2: Map { "name": "ahhh", "age": 111, "home": Map { "name": "山东" } }
console.log('obj3:', obj3); //obj3: Map { "name": "ahhh", "age": 112, "home": Map { "name": "山东" } }

let obj4 = obj3.updateIn(['home', 'number'], val => val + 1);
console.log('obj4:', obj4);

let obj5 = obj4.delete('name');
console.log('obj5:', obj5);

let obj6 = obj5.clear();
console.log('obj6', obj6); //obj6 Map {}

let obj7 = obj6.merge({name: 'ahhh', age: 111});
console.log('obj7:', obj7);

console.log(obj7.toJS())
console.log(obj7.toJSON())
console.log(obj7.toObject())
//{ name: 'ahhh', age: 111 }

console.log(...obj7.keys()) //name age
console.log(...obj7.values()) //ahhh 111
console.log(...obj7.entries()) //[ 'name', 'ahhh' ] [ 'age', 111 ]
