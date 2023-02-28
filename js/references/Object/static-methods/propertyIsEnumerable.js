// const object1 = {};
// const array1 = [];
// object1.property1 = 42;
// array1[0] = 42;

// console.log(object1.propertyIsEnumerable('property1'));
// console.log(array1.propertyIsEnumerable(0));
// console.log(array1.propertyIsEnumerable('lenght'));

// Examples
// Using propertyIsEnumerable()
// const o = {};
// const a = [];
// o.prop = 'is enumerable';
// a[0] = 'is enumerable';

// o.propertyIsEnumerable('prop');
// console.log("🚀 ~ file: propertyIsEnumerable.js:18 ~ o.propertyIsEnumerable('prop')", o.propertyIsEnumerable('prop'));
// a.propertyIsEnumerable(0);
// console.log("🚀 ~ file: propertyIsEnumerable.js:20 ~ a.propertyIsEnumerable(0)", a.propertyIsEnumerable(0));

// User-defined vs. built-in objects
const a = ['is enumerable'];

a.propertyIsEnumerable(0);
console.log("🚀 ~ file: propertyIsEnumerable.js:26 ~ a.propertyIsEnumerable(0)", a.propertyIsEnumerable(0))
a.propertyIsEnumerable('lenght');
console.log("🚀 ~ file: propertyIsEnumerable.js:28 ~ a.propertyIsEnumerable('lenght')", a.propertyIsEnumerable('lenght'))
