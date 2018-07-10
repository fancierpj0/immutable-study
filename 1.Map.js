let immutable = require('immutable');

let {Map, List} = immutable;

let obj1 = Map({name: 'ahhh', age: 111,home:{name:'成都'}});
console.log('obj1:', obj1); // Map { "name": "ahhh", "age": 111 }

//TODO set
let obj2 = obj1.set('name','ahhh2');
console.log('obj2', obj2); // Map { "name": "ahhh2", "age": 111 }

console.log('obj1 === obj2:', obj1 === obj2); //false
console.log('obj1,obj2:', obj1, obj2); //obj1,obj2: Map { "name": "ahhh", "age": 111 } Map { "name": "ahhh2", "age": 111 }

console.log('obj1.home === obj2.home:',obj1.home === obj2.home); //true

// function Map(obj){
//   let ret = {...obj};
//
//   ret.set = function (key,value) {
//     // return Object.assign(obj, {[key]: value});
//     return {...obj, [key]: value};
//   };
//
//   return ret;
// }
