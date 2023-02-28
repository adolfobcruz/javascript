// function Foo() {}
// function Bar() {}

// Bar.prototype = Object.create(Foo.prototype);

// const bar = new Bar();

// console.log(Foo.prototype.isPrototypeOf(bar));
// console.log(Bar.prototype.isPrototypeOf(bar));

// Examples
// Using isPrototypeOf()
// class Foo {}
// class Bar extends Foo {}
// class Baz extends Bar {}

// const foo = new Foo();
// const bar = new Bar();
// const baz = new Baz();

// console.log(Baz.prototype.isPrototypeOf(baz));
// console.log(Baz.prototype.isPrototypeOf(bar));
// console.log(Baz.prototype.isPrototypeOf(foo));
// console.log(Bar.prototype.isPrototypeOf(baz));
// console.log(Bar.prototype.isPrototypeOf(foo));
// console.log(Foo.prototype.isPrototypeOf(baz));
// console.log(Foo.prototype.isPrototypeOf(bar));
// console.log(Object.prototype.isPrototypeOf(baz));

class Foo {
  #value = "foo";
  static getValue(x) {
    return x.#value;
  }
  static isFoo(x) {
    return #value in x;
  }
}

const baz = { __proto__: Foo.prototype };

if (Foo.isFoo(baz)) {
  // Doesn't run, because baz is not a Foo
  console.log(Foo.getValue(baz));
}

// Educative.io
// initializing objects
// var objOne = new Object();
// function func(){};
// var array = [5, 10, 20];

// // checking valid prototype chains
// console.log(Object.prototype.isPrototypeOf(objOne));
// console.log(Function.prototype.isPrototypeOf(func));
// console.log(Array.prototype.isPrototypeOf(array));

// //checking invalid prototype chains
// console.log(Function.prototype.isPrototypeOf(array));
// console.log(Array.prototype.isPrototypeOf(objOne));