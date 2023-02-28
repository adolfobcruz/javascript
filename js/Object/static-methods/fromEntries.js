// Examples
// Converting a Map to an Object
// const entries = new Map([
//   ['foo', 'bar'],
//   ['baz', 42],
// ]);
// const obj = Object.fromEntries(entries);
// console.log(obj);

// Converting an Array to an Object
// const arr = [
//   ["0", "a"],
//   ["1", "b"],
//   ["2", "c"],
// ];
// const obj = Object.fromEntries(arr);
// console.log(obj);

// Object transformations
const object1 = { a: 1, b: 2, c: 3};
const object2 = Object.fromEntries(
  Object.entries(object1).map(([key, value]) => [key, value * 2]),
);
console.log(object2);