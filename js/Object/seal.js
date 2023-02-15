console.clear();

// const object1 = {
//   property1: 42
// };

// Object.seal(object1);
// // console.log(object1.property1);
// object1.property1 = 33;
// // console.log(object1.property1);

// delete object1.property1;
// console.log(object1.property1);

// Examples
// Using Object.seal
const obj = {
  prop() {},
  foo: 'bar',
};

// New properties may be added, existing properties
// may be changed or removed.
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

const o = Object.seal(obj);

o === obj;
Object.isSealed(obj);
console.log("🚀 ~ file: seal.js:31 ~ Object.isSealed(obj)", Object.isSealed(obj))
console.log(obj);

// Changing property values on a sealed object
// still works.
obj.foo = 'quux';
console.log(obj);

// But you can't convert data properties to accessors,
// or vice versa.
// Object.defineProperty(obj, 'foo', {
//   get() {
//     return 'g'
//   },
// });

// Now any changes, other than to property values,
// will fail.
obj.quaxxor = 'the friendly duck';
// silently doesn't add the property
delete obj.foo;
// silently doesn't delete the property

// ...and in strict mode such attempts
// will throw TypeErrors.
// function fail() {
//   'use strict';
//   delete obj.foo;
//   obj.sparky = 'arf';
// }
// fail();

// Attempted additions through
// Object.defineProperty will also throw.
// Object.defineProperty(obj, 'ohai', {
//   value: 17,
// });
Object.defineProperty(obj, 'foo', {
  value: 'eit',
});
console.log(obj);