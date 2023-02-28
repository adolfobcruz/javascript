console.clear();

// function Dog(name) {
//   this.name = name;
// }

// const dog1 = new Dog('Pitty');

// Dog.prototype.toString = function dogToString() {
//   return `${this.name}`;
// }

// console.log(dog1.toString());

// Examples
// Overriding toString for custom objects
class Dog {
  constructor(name, breed, color, sex) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.sex = sex;
  }

  toString() {
    return `Dog ${this.name} is a ${this.sex} ${this.color} ${this.breed}`;
  }
}

const theDog = new Dog('Pitty', 'Lab', 'black', 'female');

console.log(`${theDog}`);