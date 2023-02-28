// const object1 = {
//   property1: 42
// }

// console.log(Object.isSealed(object1));

// Object.seal(object1);

// console.log(Object.isSealed(object1));

// Examples
// Using Object.isSealed
// Objects aren't sealed by default.
// const empty = {};
// Object.isSealed(empty);
// console.log("🚀 ~ file: isSealed.js:16 ~ Object.isSealed(empty)", Object.isSealed(empty))

// // If you make an empty object non-extensible,
// // it is vacuously sealed.
// Object.preventExtensions(empty);
// Object.isSealed(empty);
// console.log("🚀 ~ file: isSealed.js:22 ~ Object.isSealed(empty)", Object.isSealed(empty));

// The same is not true of a non-empty object,
// unless its properties are all non-configurable.
const hasProp = { fee: 'fie foe fum' };
Object.preventExtensions(hasProp);
Object.isSealed(hasProp);
console.log("🚀 ~ file: isSealed.js:29 ~ Object.isSealed(hasProp)", Object.isSealed(hasProp));

// But make them all non-configurable
// and the object becomes sealed.
Object.defineProperty(hasProp, 'fee', {
  configurable: false,
});
Object.isSealed(hasProp);
console.log("🚀 ~ file: isSealed.js:37 ~ Object.isSealed(hasProp)", Object.isSealed(hasProp))
