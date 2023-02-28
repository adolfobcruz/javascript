// const object1 = {
//   a: 'something',
//   b: '42',
//   c: false
// };

// console.log(Object.keys(object1));

// Examples
// Using Object.keys()
// Simple Array
// const arr = ['a', 'b', 'c'];
// console.log(Object.keys(arr));

// // Array-like object
// const obj = { 0: '1', 1: 'b', 2: 'c' };
// console.log(Object.keys(obj));

// // Array-like object with random key ordering
// const anObj = { 100: 'a', 2: 'b', 7: 'c' };
// console.log(Object.keys(anObj));

// getFoo is a non-enumerable property
// const myObj = Object.create(
//   {},
//   {
//     getFoo: {
//       value() {
//         return this.foo;
//       },
//     },
//   },
// );
// myObj.foo = 1;
// console.log(Object.keys(myObj)); // ['foo']

// Using Object.keys() on primitives
// Strings have indices as enumerable own properties
console.log(Object.keys('foo'));