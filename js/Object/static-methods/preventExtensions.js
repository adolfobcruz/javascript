// const object1 = {};

// Object.preventExtensions(object1);

// try {
//   Object.defineProperty(object1, 'property1', {
//     value: 42
//   });
// } catch (e) {
//   console.log(e);
// }

// Examples
// Using Object.preventExtensions
// Object.preventExtensions returns the object
// being made non-extensible.
// const obj = {};
// const obj2 = Object.preventExtensions(obj);
// obj === obj2
// console.log("🚀 ~ file: preventExtensions.js:20 ~ obj === obj2", obj === obj2);

// Objects are extensible by default.
// const empty = {};
// console.log("🚀 ~ file: preventExtensions.js:25 ~ Object.isExtensible(empty)", Object.isExtensible(empty));

// // They can be made un-extensible
// Object.preventExtensions(empty);
// console.log("🚀 ~ file: preventExtensions.js:30 ~ Object.isExtensible(empty)", Object.isExtensible(empty));

// Object.defineProperty throws when adding
// a new property to a non-extensible object.
// const nonExtensible = { removable: true };
// Object.preventExtensions(nonExtensible);
// Object.defineProperty(nonExtensible, "new", {
//   value: 8675309,
// }); // throws a TypeError

// In strict mode, attempting to add new properties
// to a non-extensible object throws a TypeError.
function fail() {
  "use strict";
  // throws a TypeError
  nonExtensible.newProperty = "FAIL";
}
fail();