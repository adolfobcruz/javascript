// const object1 = {
//   a: 1,
//   b: 2,
//   c: 3
// };

// console.log(Object.getOwnPropertyNames(object1));

// Examples
// Using Object.getOwnPropertyNames()
// const arr = ['a', 'b', 'c'];

// console.log(Object.getOwnPropertyNames(arr).sort());

// Array-like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };

// console.log(Object.getOwnPropertyNames(obj).sort());

// Object.getOwnPropertyNames(obj).forEach((val, idx, array) => {
//   console.log(`${val} -> ${obj[val]}`);
// });

// non-enumerable property
// const myObj = Object.create({}, {
//   getFoo: {
//     value() { return this.foo; },
//     enumerable: false
//   }
// });
// myObj.foo = 1;

// console.log(Object.getOwnPropertyNames(myObj).sort());

// Get non-enumerable properties only
const target = obj;
const enumAndNonenum = Object.getOwnPropertyNames(target);
const enumOnly = new Set(Object.keys(target));
const nonenumOnly = enumAndNonenum.filter((key) => !enumOnly.has(key));

console.log(nonenumOnly);