// const object1 = {
//   prop: 'exists'
// };

// console.log(Object.hasOwn(object1, 'prop'));
// console.log(Object.hasOwn(object1, 'toString'));
// console.log(Object.hasOwn(object1, 'undeclaredPropertyValue'));

// Examples
// Using hasOwn to test for a property's existence
// const example = {};

// example.prop = 'exists';
// example.prop = null;
// example.prop = undefined;
// console.log(Object.hasOwn(example, 'prop'));

// Direct vs. inherited properties
// const example = {};
// example.prop = 'exists';

// `hasOwn` will only return true for direct properties:
// console.log(Object.hasOwn(example, 'prop'));

// The `in` operator will return true for direct or inherited properties:
// console.log('prop' in example);
// console.log('toString' in example);
// console.log('hasOwnProperty' in example);

// Iterating over the properties of an object
// const example = { foo: true, bar: true };
// for (const name of Object.keys(example)) {
//   console.log(example);
// }

// const example = { foo: true, bar: true };
// for (const name in example) {
//   if (Object.hasOwn(example, name)) {
//     console.log(name);
//   }
// }

// Checking if an Array index exists
// const fruits = ['Apple', 'Banana', 'Watermelon', 'Orange'];
// console.log(Object.hasOwn(fruits, 3));   // true ('Orange')
// console.log(Object.hasOwn(fruits, 4));   // false - not defined

// Problematic cases for hasOwnProperty
const foo = {
  hasOwnProperty() {
    return false;
  },
  bar: 'The dragons be out of office',
};

if (Object.hasOwn(foo, 'bar')) {
  console.log(foo.bar); //true - reimplementation of hasOwnProperty() does not affect Object
}