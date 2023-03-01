// const person = {
//   isHuman: false,
//   printIntroduction: function() {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   }
// };

// const me = Object.create(person);

// me.name = 'Adolfo';
// me.isHuman = true;

// me.printIntroduction();

// Examples
// Classical inheritance with Object.create()
// Shape - superclass
// function Shape() {
//   this.x = 0;
//   this.y = 0;
// }

// // superclass method
// Shape.prototype.move = function (x, y) {
//   this.x += x;
//   this.y += y;
//   console.info('Shape moved!');
// }

// // Rectangle - subclass
// function Rectangle() {
//   Shape.call(this);
// }

// // subclass extends superclass
// Rectangle.prototype = Object.create(Shape.prototype, {
//   // If you don't set Rectangle.prototype.constructor to Rectangle,
//   // it will take the prototype.constructor of Shape (parent).
//   // To avoid that, we set the prototype.constructor to Rectangle (child).
//   constructor: {
//     value: Rectangle,
//     enumerable: false,
//     writable: true,
//     configurable: true,
//   },
// });

// const rect = new Rectangle();

// console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle);
// console.log('Is rect an instance of Shape?', rect instanceof Shape);
// rect.move(1, 1);

// Using propertiesObject argument with Object.create()
o = {};
// Is equivalent to:
o = Object.create(Object.prototype);

o = Object.create(Object.prototype, {
  // foo is a regular data property
  foo: {
    writable: true,
    configurable: true,
    value: "hello",
  },
  // bar is an accessor property
  bar: {
    configurable: false,
    get() {
      return 10;
    },
    set(value) {
      console.log("Setting `o.bar` to", value);
    },
  },
});

// Create a new object whose prototype is a new, empty
// object and add a single property 'p', with value 42.
o = Object.create({}, { p: { value: 42 } });

o.p = 24; // throws in strict mode
o.p; // 42

o.q = 12;
for (const prop in o) {
  console.log(prop);
}
// 'q'

delete o.p;
// false; throws in strict mode
