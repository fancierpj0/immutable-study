let immutable = require('immutable')
  , {Map, List} = immutable
  , arr1 = List([1, 2, 3])
  , arr2 = arr1.push(4)
  , arr3 = arr2.pop()
  , arr4 = arr3.map(item => item * 2)
  , arr5 = arr4.filter(item => item < 5)

  //1 是索引为1的意思
  , arr6 = arr5.update(1, val => val + 1)

  , arr7 = arr6.delete(0)
  , arr8 = arr7.push(10)
  , arr9 = arr8.last();

console.log('immutable.Range(1,6):', immutable.Range(1, 6));
//[1,2,3,4,5]
//[4,5]
//[8,10]
//都能被整除
//取两个
//8+10=18
let ret = immutable.Range(1, 6).skip(3).map((n) => n * 2).filter((n) => n % 2 == 0).take(2).reduce((a, b) => a + b, 0);
console.log('ret:', ret); //18
