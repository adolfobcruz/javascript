console.clear();

// function MyNumberType(n) {
//   this.number = n;
// }

// MyNumberType.prototype.valueOf = function() {
//   return this.number;
// }

// const object1 = new MyNumberType(4);

// console.log(object1 + 3);

// Examples
// Using valueOf()
// const obj = { foo: 1 };
// console.log(obj.valueOf() === obj);
// console.log(Object.prototype.valueOf.call('primitive'));

// Overriding valueOf for custom objects
class Box {
  #value;

  constructor(value) {
    this.#value = value;
  }

  valueOf() {
    return this.#value;
  }
}

const box = new Box(123);

console.log(box + 456);
console.log(box == 123);