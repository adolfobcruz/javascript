// const object1 = {
//   a: 'somestring',
//   b: 42,
// };

// for (const [key, value] of Object.entries(object1)) {
//   console.log(`${key}: ${value}`);
// }

// Examples
// Using Object.entries()
// const obj = {foo: 'bar', baz: 42};
// console.log(Object.entries(obj));

// Array-like object
// const obj = { 0: 'a', 1: 'b', 2: 'c' };
// console.log(Object.entries(obj));

// Array-like object with random key ordering
// const anObj = { 100: 'a', 2: 'b', 7: 'c' };
// console.log(Object.entries(anObj));

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
// myObj.foo = 'bar';
// console.log(Object.entries(myObj));

// Converting an Object to a Map
const obj = { foo: 'bar', baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map);