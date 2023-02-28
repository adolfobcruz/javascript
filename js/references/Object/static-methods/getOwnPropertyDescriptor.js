// const object1 = {
//   property1: 42
// };

// const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');

// console.log(descriptor1.configurable);
// console.log(descriptor1.enumerable);
// console.log(descriptor1.writable);
// console.log(descriptor1.value);

// Examples
// Using Object.getOwnPropertyDescriptor
// let o, d;

// o = { get foo() { return 17; } };
// d = Object.getOwnPropertyDescriptor(o, 'foo');
// // console.log(d);

// o = { bar: 42 };
// d = Object.getOwnPropertyDescriptor(o, 'bar');
// // console.log(d);

// o = { [Symbol.for('baz')]: 73 };
// d = Object.getOwnPropertyDescriptor(o, Symbol.for('baz'));
// // console.log(d);

// o = {};
// Object.defineProperty(o, 'qux', {
//   value: 8675309,
//   writable: false,
//   enumerable: false
// });
// d = Object.getOwnPropertyDescriptor(o, 'qux');
// console.log(d);
