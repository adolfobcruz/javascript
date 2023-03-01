// const obj = {};
// const parent = { foo: 'bar' };

// console.log(obj.foo);

// Object.setPrototypeOf(obj, parent);

// console.log(obj.foo);

// Examples
// Pseudoclassical inheritance using Object.setPrototypeOf()
// class Human {}
// class SuperHero extends Human {}

// const superMan = new SuperHero();
// console.log("🚀 ~ file: setPrototypeOf.js:16 ~ superMan", superMan);

function Human(name, level) {
  this.name = name;
  this.level = level;
}

function SuperHero(name, level) {
  Human.call(this, name, level);
}

Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

// Set the `[[Prototype]]` of `SuperHero.prototype`
// to `Human.prototype`
// To set the prototypal inheritance chain

Human.prototype.speak = function () {
  return `${this.name} says hello.`;
};

SuperHero.prototype.fly = function () {
  return `${this.name} is flying.`;
};

const superMan = new SuperHero("Clark Kent", 1);

console.log(superMan.speak());
console.log(superMan.fly());