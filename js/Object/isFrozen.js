// const object1 = {
//   property1: 42
// };
// console.log(Object.isFrozen(object1));

// Object.freeze(object1);
// console.log(Object.isFrozen(object1));

// Examples
// Using Object.isFrozen
// An empty object which is not extensible
// is vacuously frozen.
// const vacuouslyFrozen = Object.preventExtensions({});
// console.log(Object.isFrozen(vacuouslyFrozen));

// A new object with one property is also extensible,
// ergo not frozen.
// const oneProp = { p: 42 };
// Object.isFrozen(oneProp);
// console.log("🚀 ~ file: isFrozen.js:20 ~ Object.isFrozen(oneProp)", Object.isFrozen(oneProp));

// Preventing extensions to the object still doesn't
// make it frozen, because the property is still
// configurable (and writable).
// Object.preventExtensions(oneProp);
// Object.isFrozen(oneProp);
// console.log("🚀 ~ file: isFrozen.js:27 ~ Object.isFrozen(oneProp)", Object.isFrozen(oneProp));

// Deleting that property makes the object vacuously frozen.
// delete oneProp.p;
// Object.isFrozen(oneProp);
// console.log("🚀 ~ file: isFrozen.js:32 ~ Object.isFrozen(oneProp)", Object.isFrozen(oneProp));

// A non-extensible object with a non-writable
// but still configurable property is not frozen.
// const nonWritable = { e: 'plep' };
// Object.preventExtensions(nonWritable);
// Object.defineProperty(nonWritable, 'e', {
//   writable: false
// });
// Object.isFrozen(nonWritable);
// console.log("🚀 ~ file: isFrozen.js:42 ~ Object.isFrozen(nonWritable)", Object.isFrozen(nonWritable));
// console.log(Object.getOwnPropertyDescriptors(nonWritable));

// Changing that property to non-configurable
// then makes the object frozen.
// Object.defineProperty(nonWritable, 'e', {
//   configurable: false
// });
// Object.isFrozen(nonWritable);
// console.log("🚀 ~ file: isFrozen.js:51 ~ Object.isFrozen(nonWritable)", Object.isFrozen(nonWritable))

// A non-extensible object with a non-configurable
// but still writable property also isn't frozen.
// const nonConfigurable = { release: 'the-kraken!' };
// Object.preventExtensions(nonConfigurable);
// Object.defineProperty(nonConfigurable, 'release', {
//   configurable: false
// });
// Object.isFrozen(nonConfigurable);
// console.log("🚀 ~ file: isFrozen.js:61 ~ Object.isFrozen(nonConfigurable)", Object.isFrozen(nonConfigurable))
// console.log(Object.getOwnPropertyDescriptors(nonConfigurable));

// // Changing that property to non-writable
// // then makes the object frozen.
// Object.defineProperty(nonConfigurable, 'release', {
//   writable: false
// });
// Object.isFrozen(nonConfigurable);
// console.log("🚀 ~ file: isFrozen.js:70 ~ Object.isFrozen(nonConfigurable)", Object.isFrozen(nonConfigurable))

// A non-extensible object with a configurable
// accessor property isn't frozen.
// const accessor = { get food() { return 'yum'; } };
// Object.preventExtensions(accessor);
// Object.isFrozen(accessor);
// console.log("🚀 ~ file: isFrozen.js:77 ~ Object.isFrozen(accessor)", Object.isFrozen(accessor));


// // When we make that property non-configurable it becomes frozen.
// Object.defineProperty(accessor, 'food', {
//   configurable: false
// });
// Object.isFrozen(accessor);
// console.log(Object.getOwnPropertyDescriptors(accessor));
// console.log("🚀 ~ file: isFrozen.js:85 ~ Object.isFrozen(accessor)", Object.isFrozen(accessor));

// But the easiest way for an object to be frozen
// is if Object.freeze has been called on it.
const frozen = { 1: 81 };
console.log(Object.isFrozen(frozen));
Object.freeze(frozen);
console.log(Object.isFrozen(frozen));

// By definition, a frozen object is non-extensible.
Object.isExtensible(frozen);
console.log("🚀 ~ file: isFrozen.js:97 ~ Object.isExtensible(frozen)", Object.isExtensible(frozen))

// Also by definition, a frozen object is sealed.
Object.isSealed(frozen);
console.log("🚀 ~ file: isFrozen.js:101 ~ Object.isSealed(frozen);", Object.isSealed(frozen));
