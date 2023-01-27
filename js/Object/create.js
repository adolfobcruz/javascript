const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Adolfo';
me.isHuman = true;

me.printIntroduction();

// Examples
// Classical inheritance with Object.create()
