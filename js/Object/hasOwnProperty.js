const object1 = {};
object1.property1 = 42;

// console.log(object1.hasOwnProperty('property1'));
// console.log(object1.hasOwnProperty('toString'));
// console.log(object1.hasOwnProperty('hasOwnProperty'));

// Examples
// Using hasOwnProperty to test for an own property's existence
// const example = {};
// console.log(example.hasOwnProperty('prop'));   // false

// example.prop = 'exists';
// console.log(example.hasOwnProperty('prop'));   // true - 'prop' has been defined

// example.prop = null;
// console.log(example.hasOwnProperty('prop'));   // true - own property exists with value of null

// example.prop = undefined;
// console.log(example.hasOwnProperty('prop'));   // true - own property exists with value of undefined

// Iterating over the properties of an object
// const buz = {
//   fog: 'stack',
// };

// for (const name in buz) {
//   if (buz.hasOwnProperty(name)) {
//     console.log(`this is fog (${name}) for sure. Value: ${buz[name]}`);
//   } else {
//     console.log(name);
//   }
// }

// Using hasOwnProperty as a property name
const foo = {
  hasOwnProperty() {
    return false;
  },
  bar: 'Here be dragons',
};

foo.hasOwnProperty('bar');
console.log("🚀 ~ file: hasOwnProperty.js:44 ~ foo.hasOwnProperty('bar')", foo.hasOwnProperty('bar'))
