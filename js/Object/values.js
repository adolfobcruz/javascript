console.clear();

// const object1 = {
//   a: 'something',
//   b: 42,
//   c: false,
// }

// console.log(Object.values(object1));

// Examples
// Using Object.values()
// const obj = { foo: 'bar', baz: '42' };
// console.log(Object.values(obj));

// Array-like object
// const arrayLikeObj1 = { 0: '1', 1: 'b', 2: 'c' };
// console.log(Object.values(arrayLikeObj1));

// Array-like object with random key ordering
// When using numeric keys, the values are returned in the keys' numerical order
// const arrayLikeObj2 = { 100: 'a', 2: 'b', 7: 'c' };
// console.log(Object.values(arrayLikeObj2));

// getFoo is a non-enumerable property
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      }
    }
  },
);

myObj.foo = 'bar';
console.log(Object.values(myObj));