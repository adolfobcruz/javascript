// const object1 = {};

// console.log(Object.isExtensible(object1));

// Object.preventExtensions(object1);

// console.log(Object.isExtensible(object1));

// Examples
// Using Object.isExtensible
// New objects are extensible.
// const empty = {};
// console.log(Object.isExtensible(empty));

// They can be made un-extensible
// Object.preventExtensions(empty);
// console.log(Object.isExtensible(empty));

// Sealed objects are by definition non-extensible.
// const sealed = Object.seal({});
// console.log(Object.isExtensible(sealed));

// Frozen objects are also by definition non-extensible.
// const frozen = Object.freeze({});
// console.log(Object.isExtensible(frozen));

// Non-object argument
console.log(Object.isExtensible(1));
// TypeError: 1 is not an object (ES5 code)

console.log(Object.isExtensible(1));
// false                         (ES2015 code)