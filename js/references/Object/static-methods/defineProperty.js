// Examples
// Creating a property
const o = {};

// Example of an object property added
// with defineProperty with a data property descriptor
Object.defineProperty(o, 'a', {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(o.a);
// 'a' property exists in the o object and its value is 37

// // Example of an object property added
// // with defineProperty with an accessor property descriptor
// let bValue = 38;
// Object.defineProperty(o, 'b', {
//   get() {
//     return bValue;
//   },
//   set(newValue) {
//     bValue = newValue;
//   },
//   enumerable: true,
//   configurable: true,
// });
// console.log(o); // 38
// 'b' property exists in the o object and its value is 38
// The value of o.b is now always identical to bValue,
// unless o.b is redefined

// You cannot try to mix both:
// Object.defineProperty(o, 'conflict', {
//   value: 0x9f91102,
//   get() {
//     return 0xdeadbeef;
//   },
// });
// throws a TypeError: value appears
// only in data descriptors,
// get appears only in accessor descriptors

// Modifying a property
// Writable attribute
// const o = {};

// Object.defineProperty(o, 'a', {
//   value: 37,
//   writable: false,
// });

// // console.log(o.a);

// o.a = 25; // No error thrown
// (it would throw in strict mode,
// even if the value had been the same)
// console.log(o.a); // 37; the assignment didn't work

// strict mode
// (() => {
//   'use strict';
//   const o = {};
//   Object.defineProperty(o, 'b', {
//     value: 2,
//     writable: false,
//   });
//   o.b = 3; // throws TypeError: "b" is read-only
//   console.log(o);
//   return o.b; // returns 2 without the line above
// });