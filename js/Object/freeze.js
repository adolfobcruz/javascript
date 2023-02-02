// const obj = {
//   prop: 42
// };

// Object.freeze(obj);

// obj.prop = 33;
// // Throws an error in strict mode

// console.log(obj.prop);
// // Expected output: 42

// Examples
// Freezing objects
// const obj = {
//   prop() {},
//   foo: 'bar'
// }

// // Before freezing: new properties may be added,
// // and existing properties may be changed or removed
// obj.foo = 'baz';
// obj.lumpy = 'woof';
// delete obj.prop;

// // Freeze.
// const o = Object.freeze(obj);

// // The return value is just the same object we passed in.
// o === obj;

// The object has become frozen.
// Object.isFrozen(obj);

// // Now any changes will fail
// obj.foo = 'quux'; // silently does nothing
// // silently doesn't add the property
// obj.quaxxor = 'the friendly duck';

// In strict mode such attempts will throw TypeErrors
// function fail() {
//   'use strict';
//   obj.foo = 'sparky'; // throws a TypeError
//   delete obj.foo; // throws a TypeError
//   delete obj.quaxxor; // returns true since attribute 'quaxxor' was never added
//   obj.sparky = 'arf'; // throws a TypeError
// }
// fail();

// Attempted changes through Object.defineProperty;
// both statements below throw a TypeError.
// Object.defineProperty(obj, 'ohai', { value: 17 });
// Object.defineProperty(obj, 'foo', { value: 'eit' });

// It's also impossible to change the prototype
// // both statements below will throw a TypeError.
// Object.setPrototypeOf(obj, { x: 20});
// obj.__proto__ = { x: 20 };

// console.log(obj);

// Freezing arrays
// const a = [0];
// Object.freeze(a); // The array cannot be modified now.

// // In strict mode such attempt will throw a TypeError
// function fail() {
//   'use strict';
//   a[0] = 1;
// }
// fail();

// // Attempted to push
// a.push(2); // throws a TypeError

const obj1 = {
  internal: {}
};

Object.freeze(obj1);
obj1.internal.a = 'aValue';

console.log(obj1.internal.a);